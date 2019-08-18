import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom"; 
import { createBrowserHistory } from "history";
import NotFound from '../Pages/404'

import Header from './Header'
import Test from './Testconpo'

const history = createBrowserHistory()

class Provider extends Component {

    constructor(props) {
      super(props);
      
    }
  
    render() {
        
        return (
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Test} />
                    <Route path="/test" component={Test} />

                    <Route component={NotFound}/>
                </Switch>
            </Router>
        );
    }
  }
  
  export default Provider;
