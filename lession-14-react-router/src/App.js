import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import routes from './routes';

class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Nav />

                    {/* Content */}
                    <Switch>
                        {this.showContents(routes)}
                    </Switch>
                </div>
            </Router>
        )
    }

    showContents = routes => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        exact = {route.exact}
                        path={route.path}
                        component={route.main}
                        key = {index}
                    />
                )
            })
        }
        return result;
    }
}

export default App;
