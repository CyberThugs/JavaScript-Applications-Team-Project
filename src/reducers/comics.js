import {COMICS} from "../actions/comics"

const initialState = {
    comics: null
};

export default function location(state = initialState, action) {
    switch (action.type) {
        case COMICS:
        {
            window.history.pushState("object or string", "Title", `${action.payload}`);
            return Object.assign({}, state, {comics: action.payload});
        }

        default:
            return state;
    }
}