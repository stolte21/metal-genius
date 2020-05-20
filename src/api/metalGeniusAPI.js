import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? (
    'https://metal-genius.herokuapp.com/'
) : (
    'http://localhost:3001'
);

const instance = axios.create({
    baseURL
});

export const getSampleArtists = () => {
    return instance.get('/sample');
};

export const getAggregateData = () => {
    return instance.get('/artists/aggregate');
};

export const getArtistsGeniusData = (ids) => {
    return instance.get(`/artists/${ids}`);
};

export const getArtistAnalysis = (id) => {
    return instance.get(`/artists/${id}/lyrics`);
};