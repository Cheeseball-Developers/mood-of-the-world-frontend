import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ROOT, ABOUT } from 'navigation/CONSTANTS';
import SentimentService from 'services/SentimentService';
import { Typography, Button } from '@material-ui/core';
import WorldMap from './components/WorldMap';
import { useState } from 'react';
import { ActionsContainer } from 'components';
import InfoRounded from '@material-ui/icons/InfoRounded';
import Brightness2Rounded from '@material-ui/icons/Brightness2Rounded';

const sentimentService = new SentimentService();

function HomeView({ handleThemeChange }) {
    const [countryName, setCountryName] = useState("");
    const [country, setCountry] = useState("");
    const [sentiments, setSentiments] = useState([]);

    useEffect(() => {
        refreshSentiments();
        sentimentService.getEventSource().onmessage = data => console.log('Get Data');
        return () => {
            sentimentService.getEventSource().close();
        };
    }, []);

    const history = useHistory();
    const goTo = (path) => {
        history.push(path || ROOT);
    }

    const refreshSentiments = () => {
        console.log('Refreshed');
        sentimentService.getSentiments().then((data) => {
            setSentiments(data);
        });
    }

    const buttons = [
        {
            icon: <Brightness2Rounded />,
            action: () => handleThemeChange(),
            selected: false,
            disabled: true,
        },
        {
            icon: <InfoRounded />,
            action: () => goTo(ABOUT),
            selected: false,
            disabled: false,
        },
    ];

    return (
        <React.Fragment>
            {/* <Typography variant='h2'>{props.title}</Typography> */}
            <ActionsContainer buttons={buttons} />
            {/* <Button variant="contained" color="primary" onClick={() => goTo(ABOUT)}>&#8505;</Button> */}
            <WorldMap sentiments={sentiments} setCountryName={setCountryName} setCountry={setCountry} />
            <ReactTooltip getContent={function () {
                return (
                    <div>
                        <span>{countryName}</span>
                        {sentiments.length === 0 ? <div>HI</div> : (country in sentiments) ? <ul>
                            {
                                Object.keys(sentiments[country]).map(function (sentiment, i) {
                                    return (
                                        <li>{sentiment.charAt(0).toUpperCase() + sentiment.slice(1) + ': ' + sentiments[country][sentiment]}</li>
                                    )
                                })
                            }
                        </ul> : <div>NOT FOUND</div>}
                    </div>
                )
            }} />
        </React.Fragment>
    );
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView;