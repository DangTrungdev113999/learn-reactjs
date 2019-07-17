import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    
                    <nav class="navbar navbar-inverse">
                        <ul class="nav navbar-nav">
                            <li >
                                <NavLink exact activeClassName='active' to="/" className=''>Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName='active' to="/about" className=''>About</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName='active' to="/contact" className=''>contact</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Route exact path='/' component ={Home} />
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                </div>  
            </Router>
        )
    }
}

export default App;
