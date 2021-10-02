import React from 'react';
import './SentimentsPopup.css';
import { getSentimentColor } from 'utils/countryColor';
import { Typography } from '@material-ui/core';

export const SentimentsPopup = ({ countryName, countryData, onExit }) => {
    return (
        <div className='popup-background' onClick={onExit} >
            <div className='popup'>
                <Typography variant='h4'>{countryName}</Typography>
                <br />
                {
                    Object.keys(countryData['sentiments']).map(function (sentiment, i) {
                            return (
                                <Typography variant='subtitle1'>
                                    <span class='dot' style={{ 'background-color': getSentimentColor(sentiment) }}></span>
                                    &nbsp;&nbsp;
                                    <span>
                                        {sentiment.charAt(0).toUpperCase() + sentiment.slice(1) + ': ' + countryData['sentiments'][sentiment] + '%'}
                                    </span>
                                    <br />
                                </Typography>
                            );
                    })
                }
                <br />
                <Typography variant='subtitle2'>Last Update at {countryData['lastUpdated']}</Typography>
            </div>
        </div>
    );
}