import React, { useState } from 'react';
import HomeView from 'pages/Home/HomeView.js';
import AnimatedTitle from 'components/AnimatedTitle';

export const HomeContainer = ({ handleThemeChange }) => {
    const [showSplash, setShowSplash] = useState(true);

    setTimeout(() => { setShowSplash(false) }, 3000);

    return (
        <div>
            {showSplash ? <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <AnimatedTitle />
            </div> :
                <HomeView title='The World is Feeling *sentiment*' handleThemeChange={handleThemeChange} />}
        </div>
    );
}