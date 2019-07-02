import React, { Component } from 'react';
import './App.css';
import Product from './components/product'

class App extends Component {
    onclick() {
        console.log('clicked');
    }

    onclick2(text) {
        console.log(text);
    }

    onclick3() {
        console.log('asdf');
    }

    render() {

        const products = [
            {
                id: 1,
                name: 'Iphone xs max',
                price: 1400000,
                image: "https://static.toiimg.com/thumb/msid-65786818,width-220,resizemode-4/Apple-iPhone-XS-Max.jpg",
                status: true
            },
            {
                id: 2,
                name: 'Iphone xs max',
                price: 1400000,
                image: "https://static.toiimg.com/thumb/msid-65786818,width-220,resizemode-4/Apple-iPhone-XS-Max.jpg",
                status: true
            },
            {
                id: 3,
                name: 'Iphone xs max',
                price: 1400000,
                image: "https://static.toiimg.com/thumb/msid-65786818,width-220,resizemode-4/Apple-iPhone-XS-Max.jpg",
                status: true
            },
            {
                id: 4,
                name: 'Iphone xs max',
                price: 1400000,
                image: "https://static.toiimg.com/thumb/msid-65786818,width-220,resizemode-4/Apple-iPhone-XS-Max.jpg",
                status: true
            },
        ]

        let elements = products.map((product, index) => {
            let result = '';
            if ( product.status ) {
                result =    <Product
                                key = { index }
                                price = { product.price}
                                image = { product.image }
                              > 
                              { product.name} 
                              </Product>
            };
            return result;
        })

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Hading Event</a>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                { elements }
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button 
                                    type="button" 
                                    className="btn btn-denger"
                                    onClick={ this.onclick }>
                                    Click me 1 !
                                </button>

                                 <button 
                                    type="button" 
                                    className="btn btn-denger"
                                    onClick={ () => {this.onclick2('abc') } }>
                                    Click me 2 !
                                </button>

                                <button 
                                    type="button" 
                                    className="btn btn-denger"
                                    onClick={ () => { this.onclick3() }   }>
                                    Click me 3 !
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
