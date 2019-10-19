/*
 * @Author: Tim Koepsel 
 * @Date: 2019-10-19 14:11:16 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-19 16:52:47
 */

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state += action.payload;
        case 'DECREMENT':
            return state -= action.payload;
        default:
            return state;
    }
}

export default counterReducer;