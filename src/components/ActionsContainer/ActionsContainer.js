import React from 'react';
import PropTypes from 'prop-types';
import './ActionsContainer.css'
import RoundedButton from 'components/RoundedButton';

export const ActionsContainer = (props) => {
    return (
        <div className={'top-right'}>
            {props.buttons.map(function (button, i) {
                return (
                    <RoundedButton
                        key={i}
                        onClick={button.action}
                        icon={button.icon}
                    />
                );
            })}
        </div>
    );
}

ActionsContainer.propTypes = {
    buttons: PropTypes.array.isRequired,
}