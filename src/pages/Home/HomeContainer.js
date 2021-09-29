import React, { useState } from 'react';
import HomeView from 'pages/Home/HomeView.js';
import AnimatedTitle from 'components/AnimatedTitle';

export const HomeContainer = ({ handleThemeChange }) => {
    return (
        <HomeView title='The World is Feeling *sentiment*' handleThemeChange={handleThemeChange} />
    );
}