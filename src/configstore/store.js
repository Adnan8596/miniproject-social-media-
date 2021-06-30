import {createStore, combineReducers} from 'redux';
import authReducer from '../reducers/auth';

const configStore = () => {

    const store = createStore(combineReducers({
        user:authReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}
export default configStore;