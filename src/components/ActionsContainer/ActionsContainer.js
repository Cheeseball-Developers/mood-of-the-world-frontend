import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';
import './ActionsContainer.css'

export const ActionsContainer = (props) => {
    return (
        <div className={'top-right'}>
            {props.buttons.map(function (button, i) {
                return <ActionButton icon={button.icon} action={button.action} selected={button.selected} disabled={button.disabled} />
            })}
        </div>
    );
}

ActionsContainer.propTypes = {
    buttons: PropTypes.array.isRequired,
}