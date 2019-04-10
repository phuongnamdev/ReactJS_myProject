import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginAdminAct } from "../../redux/actions/admin.actions"

class loginAdmin extends Component {
    state = {
        TaiKhoanAd: '',
        MatKhauDAd: '',
    }
    onChangeValueInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    DangNhapAd = (e) => {
        e.preventDefault();
        this.props.loginAdminComponent(this.state.TaiKhoanAd, this.state.MatKhauAd);
    }
    render() {
        return (
            <div className="admin-login">
                <div className="container">
                    <div className="login-wrap">
                        <div className="login-content">
                            <div className="login-logo">
                                <img src="../../img/logo2.png" alt="Logo" img-fluid="true" />
                                <p><span>myEDU</span>ADMIN</p>
                            </div>
                            <div className="login-form admin-login-form">
                                <form onSubmit={this.DangNhapAd}>
                                    <div className="form-group">
                                        <label>Tên tài khoản</label>
                                        <input className="au-input au-input--full" type="text" name="TaiKhoanAd" onChange={this.onChangeValueInput} placeholder="Tên tài khoản" />
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu</label>
                                        <input className="au-input au-input--full" type="password" name="MatKhauAd" onChange={this.onChangeValueInput} placeholder="Mật khẩu" />
                                    </div>
                                    <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">đăng nhập</button>
                                    <div className="social-login-content">
                                        <div className="social-button">
                                            <button className="au-btn au-btn--block au-btn--blue m-b-20">Đăng nhập với facebook</button>
                                            <button className="au-btn au-btn--block au-btn--blue2">Đăng nhập với twitter</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginAd: state.storeAdminReducer.IsLoginAdmin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginAdminComponent: (taiKhoan, matKhau) => {
            dispatch(loginAdminAct(taiKhoan, matKhau))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(loginAdmin);