import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import aggregateDataReducer from './aggregateDataReducer';
import artistsReducer from './artistsReducer';
import artistStatsReducer from './artistStatsReducer';
import geniusArtistsReducer from './geniusArtistsReducer';
import genresReducer from './genresReducer';
import loadedGenresReducer from './loadedGenresReducer';
import selectedArtistReducer from './selectedArtistReducer';
import selectedGenreReducer from './selectedGenreReducer';

export default combineReducers({
    api: apiReducer,
    aggregateData: aggregateDataReducer,
    artists: artistsReducer,
    artistStats: artistStatsReducer,
    geniusArtists: geniusArtistsReducer,
    genres: genresReducer,
    loadedGenres: loadedGenresReducer,
    selectedArtist: selectedArtistReducer,
    selectedGenre: selectedGenreReducer
});