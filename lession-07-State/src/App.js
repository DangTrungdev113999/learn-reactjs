import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [
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
                }
            ],

            isActive: true
        }
    }

    onSetState = () => {
        this.state.isActive = !this.sttate.isActive
    }

    render() {

        let elements = this.state.products.map((product, index) => {
            let result = '';
            if ( product.status ) {
                result =    <tr key={index}>
                                <td>{ product.id }</td>
                                <td>{ product.name }</td>
                                <td>
                                    <span className="label label-primary">{ product.price }</span>
                                </td>
                            </tr>
            };
            return result;
        })

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">State</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { elements }
                                </tbody>
                            </table>
                        </div>
                        <button type="button" className="btn btn-danger" onClick={ this.onSetState }>
                            active: {this.state.isActive === true ? 'true' : 'false'}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
