/*
 * @Author: Tim Koepsel 
 * @Date: 2019-06-13 10:37:39 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-19 16:06:11
 */

class AppManager {

    static myInstance = null;

    constructor() {
        this._appdata = {
            app: {
                title: 'My App'
            },
            appsettings: {
                isDebugmodeEnabled: false,
                protocol: 'https',
                api: {
                    baseUrl: 'api.io/index.php/v1/'
                }
            },
            user: null,
            session: {
                breadcumb: 'startseite'
            },
            instances: []
        };
    }

    


    /**
     * @returns {AppManager}
     */
    static getInstance() {
        if (AppManager.myInstance == null) {
            AppManager.myInstance = new AppManager();
        }

        return this.myInstance;
    }

    Debug(message, stringifyobj=null) {
        if (this._appdata.appsettings.isDebugmodeEnabled === true) {
            if (stringifyobj != null) {
                console.log('['+this._appdata.app.title+' DEBUG]: '+message+ ' | Inspection >> '+JSON.stringify(stringifyobj));
            } else {
                console.log('['+this._appdata.app.title+' DEBUG]: '+message);
            }
        }
    }

    getAppData() {
        return this._appdata.app;
    }
}

export default AppManager;