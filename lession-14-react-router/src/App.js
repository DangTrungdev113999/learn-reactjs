import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Nav from './components/Nav';

class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Nav/>

                    {/* Content */}
                    <Switch>
                        <Route exact path='/' component ={Home} />
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>  
            </Router>
        )
    }
}

export default App;
