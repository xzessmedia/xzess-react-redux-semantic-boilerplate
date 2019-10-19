/*
 * @Author: Tim Koepsel 
 * @Date: 2019-10-19 16:04:15 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2019-10-19 16:04:15 
 */

import counterReducer from './counter';
import navbarReducer from './navigation'

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    navigation: navbarReducer
});

export default allReducers;