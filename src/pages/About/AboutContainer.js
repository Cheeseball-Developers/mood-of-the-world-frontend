import React from 'react';
import { AboutView } from 'pages/About/AboutView';
import { Link } from 'react-router-dom';
import { ROOT } from 'navigation/CONSTANTS';
import { CloseIcon } from './components/CloseIcon';

export function AboutContainer() {
    return (
        <div style={{padding: '20px'}}>
            <Link to={ROOT}>
                <CloseIcon />
            </Link>
            <AboutView />
        </div>
    );
}