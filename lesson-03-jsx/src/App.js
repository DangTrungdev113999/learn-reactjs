import React, { Component} from 'react';
import './App.css';

class App extends Component {
    showInfoProduct(product) {
        if (product.status) {
            return  <h2>
                        ID: { product.id } <br/>
                        Name: { product.name } <br/>
                        Price: { product.price } <br/>
                        Price: { product.status ? 'active' : 'pending' } <br/>
                    </h2> 

        }
    };


    render() {
        const a = 5;
        const b = 7;
        const name = 'dangtrungdev';
        const product = {
            id: 1,
            name: 'iphone',
            price: 1200000,
            status: true
        }   
        const users = [
            {
                id: 1,
                name: 'trung',
                age: 18
            },
            {
                id: 2,
                name: 'trung',
                age: 19
            },
            {
                id: 1,
                name: 'trung',
                age: 20
            },
            {
                id: 1,
                name: 'trung',
                age: 21
            }
        ];
        const elements = users.map((user, index) => {
            return  <div key = { index } >
                        <h2> name:  { user.name} </h2>
                        <h3> user:  { user.age} </h3>
                    </div>
        })

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">JSX</a>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='ml-30'>
                    <h2>
                        a : { a }
                    </h2>
                    <h2>
                        a + b = { a + b }
                    </h2>
                    <h2>
                        name: { name }
                    </h2>
                    { this.showInfoProduct(product) }
                    <br/>
                    <hr/>
                    { elements }

                </div>
            </div>
        );

    }
}

export default App;
