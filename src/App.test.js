/*
 * @Author: Tim Koepsel 
 * @Date: 2019-06-13 10:59:25 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2019-06-13 10:59:25 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
