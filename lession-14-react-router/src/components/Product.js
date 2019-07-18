import React, { Component } from 'react';

class Product extends Component {
    

    render() {
        const {match} = this.props;
        const name = match.params.name;
        console.log(name);
        return (
            <h1 >
                this is Product Detail Page: {name}
            </h1>
        )
    }
}

export default Product;