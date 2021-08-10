import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ROOT } from 'navigation/CONSTANTS';
import { Typography } from '@material-ui/core';

const HomeView = (props) => {
    const history = useHistory();
    const goTo = (path) => {
        history.push(path || ROOT);
    }
    return (
        <div>
            <Typography variant='h2'>{props.title}</Typography>
        </div>
    );
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView;