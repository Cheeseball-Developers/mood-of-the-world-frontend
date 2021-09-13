import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ROOT, ABOUT } from 'navigation/CONSTANTS';
import { Typography, Button } from '@material-ui/core';
import WorldMap from './components/WorldMap';
import { useState } from 'react';
import ActionsContainer from 'components/ActionsContainer';
import InfoRounded from '@material-ui/icons/InfoRounded';
import Brightness2Rounded from '@material-ui/icons/Brightness2Rounded';

function HomeView(props) {
    const [content, setContent] = useState("");
    const history = useHistory();
    const goTo = (path) => {
        history.push(path || ROOT);
    }

    const buttons = [
        {
            icon: <Brightness2Rounded />,
            action: () => {},
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
        <>
            {/* <Typography variant='h2'>{props.title}</Typography> */}
            <ActionsContainer buttons={buttons}/>
                {/* <Button variant="contained" color="primary" onClick={() => goTo(ABOUT)}>&#8505;</Button> */}
            <div>
                <WorldMap setTooltipContent={setContent} />
                <ReactTooltip>{content}</ReactTooltip>
            </div>
        </>
    );
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView;