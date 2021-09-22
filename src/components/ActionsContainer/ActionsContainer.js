import React from 'react';
import PropTypes from 'prop-types';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import './ActionsContainer.css'

export const ActionsContainer = (props) => {
    return (
        <div className={'top-right'}>
            {props.buttons.map(function (button, i) {
                return (
                    <AwesomeButton
                    key = {i}
                    button-default-border-radius={'0 px'}
                        cssModule={AwesomeButtonStyles}
                        icon={button.icon}
                        onPress={button.action}
                    >
                        {button.icon}
                    </AwesomeButton>
                );
            })}
        </div>
    );
}

ActionsContainer.propTypes = {
    buttons: PropTypes.array.isRequired,
}