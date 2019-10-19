/*
 * @Author: Tim Koepsel 
 * @Date: 2019-06-13 10:59:07 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-19 16:59:03
 */

import React from 'react';
import './Error404.scss';
import { Redirect } from 'react-router';
import { Button } from 'semantic-ui-react'

class Error404 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };
        this.BackToPath = this.BackToPath.bind(this);
    }

    BackToPath() {
        this.setState({
            redirect: true
        });
    }

    render() {
        return (
            <div>
                {this.state.redirect === true ? <Redirect to='/'/> : null}
                <div>
                    <h1>Error 404</h1>
                    <h2>Die Seite wurde nicht gefunden</h2>
                </div>
                <div>
                <p>Die gewünschte Seite wurde leider nicht gefunden.</p>
                <p>Bitte prüfen Sie Ihre Url auf einen Fehler und versuchen Sie es erneut.</p>
                <Button onClick={()=>this.BackToPath()}>Zurück</Button>
                </div>
            </div>
        );
    }
}

export default Error404;