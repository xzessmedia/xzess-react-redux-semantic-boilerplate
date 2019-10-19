/*
 * @Author: Tim Koepsel 
 * @Date: 2019-10-19 16:04:42 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-19 16:51:34
 */

export const increment = (amount) => {
    return {
        type: 'INCREMENT',
        payload: amount
    };
};

export const decrement = (amount) => {
    return {
        type: 'DECREMENT',
        payload: amount
    };
};

export const changeNavigation = (target) => {
    return {
        type: 'CHANGENAV',
        payload: target
    };
};