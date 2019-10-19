/*
 * @Author: Tim Koepsel 
 * @Date: 2019-10-19 14:44:39 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-19 16:52:52
 */

const navbarReducer = (state = 'home', action) => {
    switch (action.type) {
        case 'CHANGENAV':
            return state + action.payload;
        default:
            return state;
    }
}

export default navbarReducer;