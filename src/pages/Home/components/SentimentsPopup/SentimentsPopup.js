import React from 'react';
import './SentimentsPopup.css';
import { getSentimentColor } from 'utils/countryColor';
import { Typography } from '@material-ui/core';

export const SentimentsPopup = ({ countryName, sentiments, onExit }) => {
    return (
        <div className='popup-background' onClick={onExit} >
            <div className='popup'>
                <Typography variant='h4'>{countryName}</Typography>
                <br />
                {
                    Object.keys(sentiments).map(function (sentiment, i) {
                        if (sentiment !== 'lastUpdated') {
                            return (
                                <Typography variant='body2'>
                                    <span class='dot' style={{ 'background-color': getSentimentColor(sentiment) }}></span>
                                    &nbsp;&nbsp;
                                    <span>
                                        {sentiment.charAt(0).toUpperCase() + sentiment.slice(1) + ': ' + sentiments[sentiment] + '%'}
                                    </span>
                                    <br />
                                </Typography>
                            );
                        } else {
                            return (
                                <div></div>
                            );
                        }
                    })
                }
                <br />
                <Typography variant='subtitle2'>Last Update at {sentiments['lastUpdated']}</Typography>
            </div>
        </div>
    );
}