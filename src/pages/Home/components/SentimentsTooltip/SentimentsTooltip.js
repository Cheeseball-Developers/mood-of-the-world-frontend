import { Typography } from '@material-ui/core';
import React from 'react';
import { getSentimentColor } from 'utils/countryColor';
import './SentimentsTooltip.css';

export const SentimentsTooltip = ({ countryData }) => {
    let sentiments = countryData['sentiments'];
    let lastUpdated = countryData['lastUpdated'];
    return (
        <div>
            {
                Object.keys(sentiments).map(function (sentiment, i) {
                    if (sentiment !== 'lastUpdated') {
                        return (
                            <Typography variant='subtitle1'>
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
            <Typography variant='subtitle2'>Last Update at {lastUpdated}</Typography>
        </div >
    );
}