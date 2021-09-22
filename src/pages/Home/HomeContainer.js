import React from 'react';
import HomeView from 'pages/Home/HomeView.js';

export const HomeContainer = ({handleThemeChange}) => {
    return (
        <div>
            <HomeView title='The World is Feeling *sentiment*' handleThemeChange={handleThemeChange} />
        </div>
    );
}