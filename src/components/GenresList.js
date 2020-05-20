import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { selectGenre } from '../actions';

const useStyles = makeStyles(theme =>({
    list: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 0,
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    listItem: {
        listStyle: 'none',
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.65rem'
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 8
        }
    },
    unselectedItem: {
        cursor: 'pointer',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.3)'
        }
    },
    selectedItem: {
        transform: 'scale(1.3)',
        fontWeight: 'bold',
        textDecoration: 'underline'
    }
}));

const GenresList = ({
    // props
    selectedGenre,
    genres,

    // actions
    selectGenre
}) => {

    const classes = useStyles();

    const renderList = () => {
        return genres.map(genre => (
            <Typography
                key={genre}
                className={clsx({
                    [classes.listItem]: true,
                    [classes.unselectedItem]: genre !== selectedGenre,
                    [classes.selectedItem]: genre === selectedGenre
                })}
                component="li"
                onClick={() => selectGenre(genre)}
            >
                {genre}
            </Typography>
        ))
    };

    return (
        <div>
            <ul className={classes.list}>
                {renderList()}
            </ul>
        </div>
    );
};

const mapStateToProps = ({ selectedGenre, genres }) => {
    return {
        selectedGenre,
        genres
    };
};

export default connect(mapStateToProps, { selectGenre })(GenresList);