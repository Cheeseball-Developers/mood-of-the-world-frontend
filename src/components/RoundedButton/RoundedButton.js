import React from 'react';
import './RoundedButton.css';

export const RoundedButton = ({ onClick, icon }) => {
    return (
        <div className='rounded-button' onClick={onClick}>
            {icon}
        </div>
    );
}