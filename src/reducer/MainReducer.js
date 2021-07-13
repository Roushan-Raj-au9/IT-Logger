import { combineReducers } from 'redux';

import { LogReducer } from './LogReducer';
import { TechReducer } from './TechReducer';

const MainReducer = combineReducers({
    LogReducer,
    TechReducer
})

export default MainReducer;
