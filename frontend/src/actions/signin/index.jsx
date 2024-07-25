// Login Actions
export const SET_CONNECTED = 'login/setConnected';
export const SET_TOKEN = 'login/setToken';


export const setConnected = (payload) => ({
    type: SET_CONNECTED,
    payload,
});

export const setToken = (payload) => ({
    type: SET_TOKEN,
    payload,
});