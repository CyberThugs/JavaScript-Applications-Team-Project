import {LOCATION} from "../actions/location"
const initialState = {
    location:"home"
};

export default function location(state = initialState, action) {
    switch (action.type) {
        case LOCATION:
        {
            return Object.assign({}, state, {location:action.payload});
        }

        default:
            return state;
    }
}