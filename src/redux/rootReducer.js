import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import { authSliceReducer } from './authSlice';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filterReducer,
    auth: authSliceReducer,
});

export default rootReducer;
