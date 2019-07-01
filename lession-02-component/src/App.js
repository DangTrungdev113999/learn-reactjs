import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Product from './components/product';

class App extends Component {
  render() {
      return (
        <div>
          <Header/>
          <div className="row">
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <Product/>
            </div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <Product/>
            </div>
          </div>
        </div>
      );
    }
  }

export default App;
