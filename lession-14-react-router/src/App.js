import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                let active = match ? 'active abc' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {lable}
                        </Link>
                    </li>
                );
            }}
        />
    );
}

class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    
                    <nav className="navbar navbar-default">
                        <ul className="nav navbar-nav">
                            <MenuLink lable='Home' to='/' activeOnlyWhenExact={true} />
                            <MenuLink lable='About' to='/about' activeOnlyWhenExact={false} />
                            <MenuLink lable='Contact' to='/contact' activeOnlyWhenExact={false} />
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
