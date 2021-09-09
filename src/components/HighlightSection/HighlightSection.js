import React from 'react';
import PropTypes from 'prop-types';

export const HighlightSection = (props) => {
    return (
        <div>
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