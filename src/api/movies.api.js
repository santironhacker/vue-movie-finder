import axios from './axios';

const API_KEY = '?apikey=7bf150da';

const getMoviesByTitle = (title, page) => axios.get(`${API_KEY}&s=${title}&page=${page}`);

export {
    getMoviesByTitle
}