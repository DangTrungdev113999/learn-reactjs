import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                let active = match ? 'active abc' : '';
                return (
                    <li className={`${active} aas`}>
                        <Link to={to}>
                            {lable}
                        </Link>
                    </li>
                );
            }}
        />
    );
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <MenuLink lable='Home' to='/' activeOnlyWhenExact={true} />
                    <MenuLink lable='About' to='/about' activeOnlyWhenExact={false} />
                    <MenuLink lable='Contact' to='/contact' activeOnlyWhenExact={false} />
                </ul>
            </nav>
        )
    }
}

export default Menu;