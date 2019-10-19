/*
 * @Author: Tim Koepsel 
 * @Date: 2019-06-13 10:44:05 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-06-13 10:46:53
 */

import axios from 'axios';
import AppManager from 'AppData';

var appdata = AppManager.getInstance();
var data = appdata.getAppData();

export default axios.create({
  baseURL: data.appsettings.api.baseUrl
});