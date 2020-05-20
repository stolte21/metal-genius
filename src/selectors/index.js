import { createSelector } from 'reselect';

/* API Util */

export const createLoadingSelector = (actions) => (state) => {

    // special case where the app is first loading and for the first
    // render the loading reducer is empty
    if (state.api.loading.isEmpty()) { return true; }

    // returns true if one of the actions supplied is in the loading state
    return actions.some(action => state.api.loading.get(action));
};

/* Selectors */

const getSelectedGenre = (state) => state.selectedGenre;
const getArtists = (state) => state.artists;

export const getArtistsOfGenre = createSelector(
    [ getSelectedGenre, getArtists ],
    (selectedGenre, artists) => {
        const artistsList = artists.filter(({ genre }) => genre === selectedGenre).toList();
        return artistsList.sortBy(({ artist }) => artist);
    }
);