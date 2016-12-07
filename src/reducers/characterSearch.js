import {CHARACTER_SEARCH} from "../actions/characterSearch"

const initialState = {};

export default function location(state = initialState, action) {
    switch (action.type) {
        case CHARACTER_SEARCH:
        {
            window.history.pushState("object or string", "Title", `${action.payload}`);
            return Object.assign({}, state, {characterSearch: action.payload});
        }

        default:
            return state;
    }
}