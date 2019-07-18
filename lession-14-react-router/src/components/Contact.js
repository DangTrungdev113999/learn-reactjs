import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contaact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    isChecked = isChecked => {
        this.setState({
            isChecked
        })
    }

    render() {
        const {isChecked} = this.state;
        return (
            <div>
                <h1>  this is Contaact Page </h1> <br />

                <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => this.isChecked(false)}
                >
                    allow
                </button> <br />

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.isChecked(true)}
                >
                    Not allow
                </button>

                <Prompt
                    when={isChecked}
                    message={location => (`Are you sure want to go ${location.pathname}`)}
                />
            </div>
        )
    }
}

export default Contaact;