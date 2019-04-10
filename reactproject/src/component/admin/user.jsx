import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { deleteUser, updateUser, getUserInfo, registerCourse } from '../../redux/actions/admin.actions';

class user extends Component {
    state = {
        open: false,
        TaiKhoan: '',
        MatKhau: '',
        HoTen: '',
        Email: '',
        SoDT: '',
        MaLoaiNguoiDung: '',
        MaKhoaHocDcGhiDanh: '',
    };
    co
    handleClickOpen = (type, taikhoan, hoten, email, sodt, maloai) => {
        this.setState({ 
            open: true, 
            typeForm: type, 
            TaiKhoan: taikhoan
        });
        if(hoten && email && sodt && maloai){
            this.setState({
                HoTen: hoten,
                Email: email,
                SoDT: sodt, 
                MaLoaiNguoiDung: maloai
            })
        }
    };
    handleClose = () => {
        this.setState({
            open: false,
        });
    };
    onChangeValueInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })       
    }
    CapNhatNgDung = (e) => {
        e.preventDefault();
        const userIsUpdate = {
            TaiKhoan: this.state.TaiKhoan,
            HoTen: this.state.HoTen,
            MatKhau: this.state.MatKhau,
            Email: this.state.Email,
            SoDT: this.state.SoDT,
            MaLoaiNguoiDung: this.state.MaLoaiNguoiDung,
        }
        this.props.updateUserComponent(userIsUpdate)
    }
    GhiDanhNgDung = (e) => {
        e.preventDefault()
        const userIsRegister = {
            MaKhoaHoc: this.state.MaKhoaHocDcGhiDanh,
            TaiKhoan: this.state.TaiKhoan,
        }
        console.log(userIsRegister);
        this.props.registerCourseComponent(userIsRegister)
        
    }
    render() {
        let { user } = this.props;
        const DSKhHoc = this.props.DSKhHoc.map((course, index) => {
            return (
                <option key={index} value={course.MaKhoaHoc}>{course.TenKhoaHoc}</option>
            )
        })
        const showForm = this.state.typeForm === 'update' ? (
            <div>
                <DialogTitle id="form-dialog-title">Cập nhật người dùng</DialogTitle>
                <form onSubmit={this.CapNhatNgDung}>
                    <DialogContent>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Tài khoản</label>
                                    <input type="text" name="TaiKhoan" readOnly onChange={this.onChangeValueInput} defaultValue={user.TaiKhoan} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Mật khẩu</label>
                                    <input type="password" name="MatKhau" onChange={this.onChangeValueInput} className="form-control" />
                                </div>
                                <div className="alert alert-warning">
                                    Vui lòng cập nhật mật khẩu cho người dùng
                                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Họ tên</label>
                                    <input type="text" name="HoTen" defaultValue={user.HoTen} onChange={this.onChangeValueInput} className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="text" name="Email" defaultValue={user.Email} onChange={this.onChangeValueInput} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Số điện thoại</label>
                                    <input type="number" name="SoDT" defaultValue={user.SoDT} onChange={this.onChangeValueInput} className="form-control" />
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
                                <div className="alert alert-warning">
                                    Vui lòng cập nhật loại người dùng
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" color="primary">
                            Cập nhật
                                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Hủy
                                        </Button>
                    </DialogActions>
                </form>
            </div>
        ) : (
                <div>
                    <DialogTitle id="form-dialog-title">Ghi danh người dùng</DialogTitle>
                    <form onSubmit={this.GhiDanhNgDung}>
                        <DialogContent>
                            <div className="form-group">
                                <label htmlFor="">Tài khoản đang được ghi danh</label>
                                <input type="text" name="TaiKhoan" readOnly onChange={this.onChangeValueInput} defaultValue={user.TaiKhoan} className="form-control" />
                            </div>
                            <select className="form-control" name="MaKhoaHocDcGhiDanh" onChange={this.onChangeValueInput} >
                                <option>Chọn khóa học</option>
                                {DSKhHoc}
                            </select>
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" color="primary">
                                Ghi danh
                            </Button>
                            <Button onClick={this.handleClose} color="primary">
                                Hủy
                            </Button>
                        </DialogActions>
                    </form>
                </div>
            )
        return (
            <div>
                <div className="border-bottom tr-shadow mt-5">
                    <div className="row">
                        <div className="col-xs-3 col-md-3">
                            <p>{user.TaiKhoan}</p>
                        </div>
                        <div className="col-xs-3 col-md-2">
                            <p className="desc">{user.HoTen}</p>
                        </div>
                        <div className="col-xs-3 col-md-2">
                            <p className="block-email">{user.Email}</p>
                        </div>
                        <div className="col-xs-2 col-md-2">
                            <p>{user.SoDT}</p>
                        </div>
                        <div className="col-xs-2 col-md-2">
                            <p className="status--process">{user.TenLoaiNguoiDung}</p>
                        </div>
                        <div className="col-xs-1 col-md-1 row">
                            {/* <ModalEditUser onClick={() => {this.props.getUserInfoComponent(user.TaiKhoan)}} /> */}
                            <button onClick={() => { this.handleClickOpen("update", user.TaiKhoan, user.HoTen, user.Email, user.SoDT, user.TenLoaiNguoiDung) }}>
                                <FontAwesomeIcon icon="edit" />
                            </button>
                            <button onClick={() => {this.handleClickOpen("register", user.TaiKhoan)}}>
                                <FontAwesomeIcon icon="registered" />
                            </button>
                            <button onClick={() => { this.props.deleteUserComponent(user.TaiKhoan) }}><FontAwesomeIcon icon="trash" /></button>
                            {/*  */}
                            <Dialog
                                open={this.state.open}
                                onClose={this.handleClose}
                                aria-labelledby="form-dialog-title"
                            >
                                {showForm}
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        DSKhHoc: state.storeAdminReducer.DanhSachKhoaHoc,
        ThongTinNgDung: state.storeAdminReducer.ThongTinNgDungCapNhat
    }
}
const mapsDisPatchToProps = (dispatch) => {
    return {
        deleteUserComponent: (taiKhoan) => {
            dispatch(deleteUser(taiKhoan))
        },
        getUserInfoComponent: (taiKhoan)=>{
            dispatch(getUserInfo(taiKhoan))
        },
        updateUserComponent: (thongTinNgDung) => {
            dispatch(updateUser(thongTinNgDung))
        },
        registerCourseComponent: (taikhoan, makhhoc)=>{
            dispatch(registerCourse(taikhoan, makhhoc))
        }
    }
}
export default connect(mapStateToProps, mapsDisPatchToProps)(user);