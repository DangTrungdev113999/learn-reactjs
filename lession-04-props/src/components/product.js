import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img  alt={ this.props.children } src={ this.props.image }/>
                        <div className="caption">
                            <h3>{ this.props.children }</h3>
                            <p>
                                Price: { this.props.price } VNĐ
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary">Mua Ngay</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
