import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            txtUsername: '',
            txtPassword: '',
            txtDesc: '',
            sltGender: 1,
            rdLang: 'en',
            chkbStatue: true
        }
    }

    onHandChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = (target.type === 'checkbox') ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={ this.onHandleSubmit }>
                                    <div className="form-group">
                                        <label >userName</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name='txtUsername'
                                            onChange = { this.onHandChange }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input 
                                            type="password" 
                                            className="form-control"
                                            name='txtPassword'
                                            onChange = { this.onHandChange }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label >mô tả</label>
                                        <textarea 
                                            className="form-control" 
                                            rows="3"
                                            name='txtDesc'
                                            onChange = { this.onHandChange }
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label >giới tính </label>
                                        <select 
                                            className="form-control"
                                            name='sltGender'
                                            onChange = { this.onHandChange }
                                            value = { this.state.sltGender }>
                                            <option value={0} >Nữ</option>
                                            <option value={1} >Nam</option>
                                        </select>
                                    </div>

                                    <div >
                                        <label >Ngôn ngữ </label>
                                        <div className="radio">
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="rdLang" 
                                                    onChange = { this.onHandChange }
                                                    value = 'vi'
                                                    checked= { this.state.rdLang === 'vi' }
                                                />
                                                tiếng việt
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="rdLang" 
                                                    onChange = { this.onHandChange }
                                                    value = 'en'
                                                    checked= { this.state.rdLang === 'en' }
                                                />
                                                tiếng anh
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input 
                                                    type="checkbox" 
                                                    value= {true}
                                                    name='chkbStatue'
                                                    onChange = { this.onHandChange }
                                                    checked = { this.state.chkbStatue === true }
                                                />
                                                Trạng thái
                                            </label>
                                        </div>
                                    </div>


                                    <button type="submit" className="btn btn-primary">Lưu lại</button> &nbsp;
                                    <button type="reset" className="btn btn-default">xoá trắng</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
