import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

const products = [
    {
        id: 1,
        slug: 'apple',
        name: 'iphone sx max',
        price: 1200
    },
    {
        id: 2,
        slug:'samsung',
        name: 'samsung',
        price: 200
    },
    {
        id: 3,
        slug: 'oppo',
        name: 'oppo',
        price: 100
    },
]



class Products extends Component {


    render() {

        const { match } = this.props;
        const url = match.url;

        let result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li
                        className="list-group-item">
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
        
            );
        });

        const { location } = this.props;
        console.log(location);

        return (
            <div className='container'>
                <h1 >
                    this is Products list
                </h1>
                <ul className="list-group">
                    {result}
                </ul>
                
                <div className="row">
                    <Route path='/products/:name'  component={Product} />
                </div>
            </div>
        )
    }
}

export default Products;