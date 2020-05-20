import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { selectArtist } from '../actions';

const useStyles = makeStyles(theme => ({
    bubble: {
        position: 'relative',
        height: 100,
        width: 100,
        margin: 8,
        borderRadius: '50%',
        border: '2px solid gray',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            height: 50,
            width: 50
        },
        transition: 'all .2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)'
        },
        '&:hover > div': {
            backgroundColor: 'rgba(0,0,0,0.7)',
        },
        '&:hover > span': {
            opacity: 1
        }
    },
    background: {
        zIndex: 1,
        borderRadius: '50%',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.0)',
        transition: 'background-color 0.3s ease-in-out'
    },
    title: {
        opacity: 0,
        zIndex: 2,
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '0.8rem',
        transition: 'opacity 0.3s ease-in-out'
    },
    avatar: {
        height: '100%',
        width: '100%'
    }
}));

const ArtistBubble = ({
    // props
    id,
    artists,

    // actions
    selectArtist
}) => {

    const classes = useStyles();
    const geniusData = artists.get(id.toString());

    if (!geniusData) {
        return <Skeleton className={classes.bubble} variant="circle" />;
    }

    const handleClick = () => {
        selectArtist(id);
    };

    const {
        image_url,
        name
    } = geniusData;

    return (
        <div
            className={classes.bubble}
            onClick={handleClick}
        >
            <div 
                className={classes.background}
            >
            </div>
            <Typography
                component="span"
                className={classes.title}
            >
                {name}
            </Typography>
            <Avatar
                className={classes.avatar}
                alt={name}
                src={image_url}
            >
                &nbsp;
            </Avatar>
        </div>
    );
};

const mapStateToProps = ({ geniusArtists }) => {
    return {
        artists: geniusArtists
    };
};

export default connect(
    mapStateToProps,
    { selectArtist }
)(ArtistBubble);