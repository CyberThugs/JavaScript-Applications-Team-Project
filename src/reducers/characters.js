import {CHARACTERS} from "../actions/characters"

const initialState = {
    characters: null
};

export default function location(state = initialState, action) {
    switch (action.type) {
        case CHARACTERS:
        {
            window.history.pushState("object or string", "Title", `${action.payload}`);
            return Object.assign({}, state, {characters: action.payload});
        }

        default:
            return state;
    }
}