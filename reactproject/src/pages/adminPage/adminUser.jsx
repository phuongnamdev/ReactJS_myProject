import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../../component/admin/user';
import ModalAddUser from '../../component/admin/modal/modalAddUser';

class adminUser extends Component {
    onChangeValueInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })   
    }
    renderUserList = () => {
        if (this.props.DanhSachNgDung) {
            return this.props.DanhSachNgDung.map((user, index) => {
                return <User key={index} 
                            user={user}  />
            })
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        {/* DATA TABLE */}
                        <ModalAddUser />
                        {/* <button type="button" className="btn btn-primary btn-lg" onClick={this.onLoginClick}>+</button>  */}
                        <div className="border-bottom table-data2 mt-5">
                            <div className="row">
                                <div className="col-xs-3 col-md-3">
                                    <h3>Tên tài khoản</h3>
                                </div>
                                <div className="col-xs-3 col-md-2">
                                    <h3>Họ tên</h3>
                                </div>
                                <div className="col-xs-3 col-md-2">
                                    <h3>Email</h3>
                                </div>
                                <div className="col-xs-2 col-md-2">
                                    <h3>Số điện thoại</h3>
                                </div>
                                <div className="col-xs-2 col-md-2 text-center">
                                    <h3>Tên loại người dùng</h3>
                                </div>
                            </div>
                        </div>
                        {this.renderUserList()}
                        {/* END DATA TABLE */}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        DanhSachNgDung: state.storeAdminReducer.DanhSachNguoiDung
    }
}
export default connect(mapStateToProps, null)(adminUser);