import {combineReducers} from 'redux';
import getAllData from './getAllData';
import itemsFilter from './itemsFilter';

export default combineReducers({
    getAllData,
    itemsFilter
})