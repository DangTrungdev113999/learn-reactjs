import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'iphone sx max',
        price: 1200
    },
    {
        id: 2,
        name: 'samsung',
        price: 200
    },
    {
        id: 3,
        name: 'oppo',
        price: 100
    },
]

let result = products.map((product, index) => {
    return (
        <NavLink to='' key={index}>
            <li
                className="list-group-item">
                {product.id} - {product.name} - {product.price}
            </li>
        </NavLink>

    );
});

class Products extends Component {


    render() {
        var { match } = this.props;
        console.log(match);
        return (
            <div className='container'>
                <h1 >
                    this is Products list
                </h1>
                <ul className="list-group">
                    {result}
                </ul>
            </div>
        )
    }
}

export default Products;