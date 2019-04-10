import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addUser } from '../../../redux/actions/admin.actions';

class modalAddUser extends Component {
    state = {
        open: false,
        TaiKhoan: '',
        MatKhau: '',
        HoTen: '',
        Email: '',
        SoDT: '',
        MaLoaiNguoiDung: '',
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    onChangeValueInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    ThemNgDung = (e) => {
        e.preventDefault();
        const userIsAdd = {
            TaiKhoan: this.state.TaiKhoan,
            MatKhau: this.state.MatKhau,
            HoTen: this.state.HoTen,
            Email: this.state.Email,
            SoDT: this.state.SoDT,
            MaLoaiNguoiDung: this.state.MaLoaiNguoiDung,
        }
        console.log(userIsAdd);
        this.props.addUserComponent(userIsAdd)
    }
    render() {
        return (
            <div>
                <Button variant="success" onClick={this.handleClickOpen}>
                    Thêm người dùng
                </Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Thêm người dùng</DialogTitle>
                    <form onSubmit={this.ThemNgDung}>
                        <DialogContent>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Tài khoản</label>
                                        <input type="text" name="TaiKhoan" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Mật khẩu</label>
                                        <input type="password" name="MatKhau" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Họ tên</label>
                                        <input type="text" name="HoTen" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="Email" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Số điện thoại</label>
                                        <input type="number" name="SoDT" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Tên loại người dùng</label>
                                        <div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio1" onChange={this.onChangeValueInput} name="MaLoaiNguoiDung" className="custom-control-input" value="HV" />
                                                <label className="custom-control-label" htmlFor="customRadio1">Học viên</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio2" onChange={this.onChangeValueInput} name="MaLoaiNguoiDung" className="custom-control-input" value="GV" />
                                                <label className="custom-control-label" htmlFor="customRadio2">Giáo Vụ</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" color="primary">
                                Thêm
                            </Button>
                            <Button onClick={this.handleClose} color="primary">
                                Hủy
                            </Button>

                        </DialogActions>
                    </form>
                </Dialog>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserComponent: (userInfo) => {
            dispatch(addUser(userInfo))
        }
    }
}
export default connect(null, mapDispatchToProps)(modalAddUser);