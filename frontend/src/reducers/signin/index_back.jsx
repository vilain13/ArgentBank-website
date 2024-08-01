import { SET_CONNECTED, SET_TOKEN} from '../../actions/signin';

const initialState = {
    connected: false,
    token: null,
};

const signinReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONNECTED:
            return {
                ...state,
                connected: action.payload,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};

export default signinReducer;