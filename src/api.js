import axios from 'axios';

const BASE_URL = 'https://api.betnare.com/v1'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const apiEndpoints = {
    getPeriods: () => api.get('/nare-league/periods'),
    getCompetitions: () => api.get('/categories'),
    getMatches: () => api.get('/nare-league/matches'),
    getPlayouts: () => api.get('/nare-league/live'),
    getResults: () => api.get('/nare-league/results'),
    getStandings: () => api.get('/nare-league/standings'),
};

export default apiEndpoints;
