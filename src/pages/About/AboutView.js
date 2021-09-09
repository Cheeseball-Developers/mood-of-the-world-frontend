import React from 'react';
import { Typography } from '@material-ui/core';
import { GithubProfileBadge } from './components/GithubProfileBadge';
import HighlightSection from 'components/HighlightSection';

export const AboutView = (props) => {
    return (
        <div>
            <Typography variant='h1'>The Project</Typography>
            Mood of the World takes a sampled stream from Twitter and uses its NLP engine to analyse the
            sentiments.
            <HighlightSection title='Contributors' child={
                <>
                    <GithubProfileBadge username='abhishekUpmanyu' />
                    <GithubProfileBadge username='OmiWakode' />
                </>}
            />
        </div>
    );
}

