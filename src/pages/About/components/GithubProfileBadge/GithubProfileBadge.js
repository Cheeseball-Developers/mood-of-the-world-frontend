import './GithubProfileBadge.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';

export const GithubProfileBadge = (props) => {
    return (
        <div align='center'>
        <Avatar style={{width:'10%', height: '10%'}} src={`https://avatars.githubusercontent.com/${props.username}`} />
        {props.username}
        </div>
    );
}

GithubProfileBadge.propTypes = {
    username: PropTypes.string.isRequired
}