import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_HOST
});

export function setupInterceptors(store) {
    instance.interceptors.request.use(
        config => {
            const state = store.getState();
            if (state.auth.accessToken) {
                const accessToken = state.auth['accessToken'];
                config.headers['Authorization'] = 'Bearer ' + accessToken;
            }
            return config;
        },
        error => {
            console.warn(error.response);
            Promise.reject(error);
        });
}

export const customAxios = instance;
