import React from 'react';
import PropTypes from 'prop-types';
import InfoRounded from '@material-ui/icons/InfoRounded';
import './ActionButton.css';

export const ActionButton = (props) => {
    return (
        <div
            className={'button' + (props.selected ? ' selected' : '') + (props.disabled ? ' disabled' : '')}
            onClick={props.action}
        >
            {props.icon}
        </div>
    );
}

ActionButton.propTypes = {
    icon: PropTypes.any.isRequired,
    action: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
}