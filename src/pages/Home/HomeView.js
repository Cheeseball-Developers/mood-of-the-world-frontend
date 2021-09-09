import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ROOT, ABOUT } from 'navigation/CONSTANTS';
import { Typography, Button } from '@material-ui/core';
import WorldMap from './components/WorldMap';
import { useState } from 'react';

function HomeView(props) {
    const [content, setContent] = useState("");
    const history = useHistory();
    const goTo = (path) => {
        history.push(path || ROOT);
    }
    return (
        <>
            <div>
                <Typography variant='h2'>{props.title}</Typography>
                <Button variant="contained" color="primary" onClick={() => goTo(ABOUT)}>&#8505;</Button>
            </div>
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