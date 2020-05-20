import {
    FETCH_SAMPLE_ARTISTS,
    FETCH_AGGREGATE_DATA,
    FETCH_ARTIST_ANALYSIS,
    FETCH_GENIUS_ARTISTS,
    LOAD_GENRE,
    SELECT_GENRE,
    SELECT_ARTIST
} from './types';

import { 
    getSampleArtists,
    getAggregateData,
    getArtistsGeniusData,
    getArtistAnalysis
} from '../api/metalGeniusAPI';

import {
    createRequestAction,
    createSuccessAction,
    createFailureAction
} from '../utils/actionUtil';

export const fetchArtists = () => (dispatch) => {

    dispatch({ type: createRequestAction(FETCH_SAMPLE_ARTISTS) });

    getSampleArtists()
    .then(({ data }) => {
        dispatch({
            type: createSuccessAction(FETCH_SAMPLE_ARTISTS),
            payload: data
        });
    })
    .catch(error => {
        dispatch({
            type: createFailureAction(FETCH_SAMPLE_ARTISTS),
            payload: 'There was an issue loading artist information.'
        });
    });
};

export const fetchAggregateData = () => (dispatch) => {

    dispatch({ type: createRequestAction(FETCH_AGGREGATE_DATA) });

    getAggregateData()
    .then(({ data }) => {
        dispatch({
            type: createSuccessAction(FETCH_AGGREGATE_DATA),
            payload: data[0]
        });
    })
    .catch(error => {
        dispatch({
            type: createFailureAction(FETCH_AGGREGATE_DATA),
            payload: 'There was an issue loading aggregate artist data.'
        });
    });
};

export const fetchGeniusArtists = (artists) => (dispatch, getState) => {

    const { selectedGenre, loadedGenres } = getState();

    if (!loadedGenres.has(selectedGenre)) {
        dispatch({ type: createRequestAction(FETCH_GENIUS_ARTISTS) });
        dispatch({ type: LOAD_GENRE, payload: selectedGenre });

        const ids = artists.map(({ id }) => id);

        getArtistsGeniusData(ids.toJS())
        .then(({ data }) => {
            dispatch({
                type: createSuccessAction(FETCH_GENIUS_ARTISTS),
                payload: data
            })
        })
        .catch(error => {
            dispatch({
                type: createFailureAction(FETCH_GENIUS_ARTISTS),
                payload: 'There was an issue getting Genius artist data.'
            })
        });
    }
};

export const fetchArtistAnalysis = (id) => (dispatch) => {

    dispatch({ type: createRequestAction(FETCH_ARTIST_ANALYSIS) });

    getArtistAnalysis(id)
    .then(({ data }) => {
        dispatch({
            type: createSuccessAction(FETCH_ARTIST_ANALYSIS),
            payload: data
        });
    })
    .catch(error => {
        dispatch({
            type: createFailureAction(FETCH_ARTIST_ANALYSIS),
            payload: 'There was an issue getting lyrical data.'
        });
    });
};

export const selectGenre = (genre) => {
    return {
        type: SELECT_GENRE,
        payload: genre
    };
};

export const selectArtist = (id) => {
    return {
        type: SELECT_ARTIST,
        payload: id
    };
};