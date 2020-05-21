import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { fetchArtists, fetchAggregateData } from '../actions';
import { FETCH_SAMPLE_ARTISTS, FETCH_AGGREGATE_DATA } from '../actions/types';
import { createLoadingSelector } from '../selectors';
import ArtistsLayout from './ArtistsLayout';
import ArtistDialog from './ArtistDialog';
import GenresList from './GenresList';
import LoadingSpinner from './LoadingSpinner';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }
    }
}));

const App = ({
    // props
    loading,

    // actions
    fetchArtists,
    fetchAggregateData
}) => {

    const classes = useStyles();
    const theme = useTheme();
    const useMobileLayout = useMediaQuery(theme.breakpoints.down('xs'));

    useEffect(() => {
        fetchArtists();
        fetchAggregateData();
    }, [fetchArtists, fetchAggregateData]);

    return (
        <div className={classes.root}>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <GenresList />
                    <ArtistsLayout
                        mobileLayout={useMobileLayout}
                    />
                    <ArtistDialog />
                </>
            )}
        </div>
    );
};

const loadingSelector = createLoadingSelector([FETCH_SAMPLE_ARTISTS, FETCH_AGGREGATE_DATA]);

const mapStateToProps = (state) => {
    return {
        loading: loadingSelector(state)
    };
};

export default connect(
    mapStateToProps,
    { fetchArtists, fetchAggregateData }
)(App);