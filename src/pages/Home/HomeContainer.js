import React, { useState } from 'react';
import HomeView from 'pages/Home/HomeView.js';
import AnimatedTitle from 'components/AnimatedTitle';

export const HomeContainer = ({ handleThemeChange }) => {
    const [showSplash, setShowSplash] = useState(true);

    setTimeout(() => { setShowSplash(false) }, 2000);

    return (
        <div>
            {showSplash ? <AnimatedTitle /> : <HomeView title='The World is Feeling *sentiment*' handleThemeChange={handleThemeChange} />}
        </div>
    );
}