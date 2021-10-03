import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { GithubProfileBadge } from './components/GithubProfileBadge';
import { HighlightSection } from 'components';
import emotions from 'assets/images/plutchik-emotions.png';
import { isBrowser } from 'react-device-detect';

export const AboutView = (props) => {
    return (
        <div>
            <Typography style={{ 'padding-top': '16px', 'padding-bottom': '16px' }} variant='h1'>
                The Project
            </Typography>
            <br />
            <Typography style={{ padding: '8px' }} variant='body1'>
                Mood of the World analyses sentiments of countries in real-time by processing live tweet stream from around the world through its NLP engine.
            </Typography>
            <HighlightSection title='Why Twitter?' child={
                <Typography variant='body2'>
                    Twitter is an enormously popular microblog on which users may voice their opinions in from of tweets.<br />
                    Twitter is a goldmine of opinions - people from all walks of life take to such platforms to express what affects them most. The analysis of this user-generated content provides valuable information about the opinion of users about a region in general.
                </Typography>
            }
            />
            <br />
            <Grid container spacing={1}>
                <Grid item xs={isBrowser ? 6 : 12}>
                    <Typography style={{ padding: '8px' }} variant='body1'>
                        The data is fed into the model from a real-time sampled stream from Twitter.
                        It focusses to classify emotion of a country, based on sentiment attached to them, with the aim to classify the tweets based on one or more of 11 emotions:
                        the eight Plutchik Categories:
                        <ul>
                            <li>joy,</li>
                            <li>sadness,</li>
                            <li>anger,</li>
                            <li>fear,</li>
                            <li>trust,</li>
                            <li>disgust,</li>
                            <li>surprise,</li>
                            <li>anticipation,</li>
                        </ul>
                        plus
                        <ul>
                            <li>love,</li>
                            <li>optimism,</li>
                            <li>pessimism,</li>
                        </ul>
                        {!isBrowser ? <img src={emotions} style={{ width: '100%' }} alt="Plutchik Emotions" /> : <div></div>}
                        <br />
                        Emotional investigation of Twitter data is a field that has been given much attention over the last decade and involves dissecting “tweets” (comments) and the content of these expressions.
                        We use NLP (Natural Language Processing) + Deep learning techniques to analyze sentiments based on 11 emotions.
                    </Typography>
                </Grid>
                {isBrowser ? <Grid item xs={6}>
                    <img src={emotions} style={{ width: '100%' }} alt="Plutchik Emotions" />
                </Grid> : <div></div>}
            </Grid>
            <br />
            <HighlightSection title='Contributors' child={
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <GithubProfileBadge username='OmiWakode' />
                    </Grid>
                    <Grid item xs={6}>
                        <GithubProfileBadge username='abhishekUpmanyu' />
                    </Grid>
                </Grid>}
            />
        </div >
    );
}

