import {createStore, combineReducers} from 'redux';
import authReducer from '../reducers/auth';
import postsReducer from '../reducers/posts';

const configStore = () => {

    const store = createStore(combineReducers({
        user:authReducer,
        posts:postsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}
export default configStore;