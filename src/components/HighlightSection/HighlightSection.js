import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import './HighlightSection.css';

export const HighlightSection = (props) => {
    return (
        <div className={'rounded-with-shadow'}>
            <Typography variant='h3'>{props.title}</Typography>
            <br />
            <div>
                {props.child}
            </div>
        </div>
    );
}

HighlightSection.propTypes = {
    title: PropTypes.string.isRequired,
    child: PropTypes.any.isRequired
}