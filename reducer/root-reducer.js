import { combineReducers } from 'redux';

import index from './re-index';
import list from './re-list';

export default combineReducers({
    index,
    list
});