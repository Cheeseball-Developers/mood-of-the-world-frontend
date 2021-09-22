import React from 'react';
import PropTypes from 'prop-types';
import './HighlightSection.css';

export const HighlightSection = (props) => {
    return (
        <div className={'rounded-with-shadow'}>
            {props.title}
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