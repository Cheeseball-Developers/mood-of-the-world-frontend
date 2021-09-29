import { Typography } from '@material-ui/core';
import React from 'react';
import { getSentimentColor } from 'utils/countryColor';
import './SentimentsTooltip.css';

export const SentimentsTooltip = ({ sentiments }) => {
    return (
        <div>
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
        </div >
    );
}