import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import location from "../reducers/location";
import characters from "../reducers/characters";
import characterSearch from "../reducers/characterSearch";
import comics from "../reducers/comics";

const logger = createLogger();
const rootReducer = combineReducers(
    {
        location,
        characters,
        comics,
        characterSearch
    }
);

const initialState = {};

export default function configureStore() {
    let store;

    if (module.hot) {
        store = createStore(rootReducer, initialState, compose(
            applyMiddleware(thunkMiddleware, logger),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    } else {
        store = createStore(rootReducer, initialState, compose(
            applyMiddleware(thunkMiddleware), f => f
        ));
    }

    return store;
}
