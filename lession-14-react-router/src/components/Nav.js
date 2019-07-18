import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
    {
        lable: 'Home',
        to: '/',
        exact: true
    },
    {
        lable: 'About',
        to: '/about',
        exact: false
    },
    {
        lable: 'Contact',
        to: '/contact',
        exact: false
    },
    {
        lable: 'Products',
        to: '/products',
        exact: false
    },
    {
        lable: 'Login',
        to: '/login',
        exact: false
    }
]

const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
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
                    {this.showMenus(menus)}
                </ul>
            </nav>
        )
    }

    showMenus = menus => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink
                    lable={menu.lable}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                    key={index}
                />
            })
        }
        return result;
    }
}

export default Menu;