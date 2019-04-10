import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserCourse, getUserInfo, editUser } from '../../redux/actions/course.actions';


class userPage extends Component {
    state = {
        TaiKhoan: '',
        MatKhau: '',
        HoTen: '',
        Email: '',
        SoDT: '',
        MaLoaiNguoiDung: 'HV',
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.thongTinTaiKhoan && nextProps) {
            this.setState({
                TaiKhoan: nextProps.thongTinTaiKhoan.TaiKhoan,
                HoTen: nextProps.thongTinTaiKhoan.HoTen,
                Email: nextProps.thongTinTaiKhoan.Email,
                SoDT: nextProps.thongTinTaiKhoan.SoDT,
            })
        }
    }
    onChangeValueInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    CapNhatTaiKhoan = (e) => {
        e.preventDefault();
        const userIsUpdate = {
            TaiKhoan: this.state.TaiKhoan,
            HoTen: this.state.HoTen,
            MatKhau: this.state.MatKhau,
            Email: this.state.Email,
            SoDT: this.state.SoDT,
            MaLoaiNguoiDung: this.state.MaLoaiNguoiDung,
        }
        console.log(userIsUpdate);
        this.props.editUserComponent(userIsUpdate)
    }
    render() {
        const showForm = typeof (this.props.thongTinTaiKhoan) == 'object' ? (
            <form onSubmit={this.CapNhatTaiKhoan}>
                <div className="form-group">
                    <label htmlFor="">Tài khoản</label>
                    <input type="text" name="TaiKhoan" readOnly defaultValue={this.state.TaiKhoan} onChange={this.onChangeValueInput} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Mật khẩu mới</label>
                    <input type="password" name="MatKhau" onChange={this.onChangeValueInput} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Họ tên</label>
                    <input type="text" name="HoTen" defaultValue={this.state.HoTen} onChange={this.onChangeValueInput} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" name="Email" defaultValue={this.state.Email} onChange={this.onChangeValueInput} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Số điện thoại</label>
                    <input type="number" name="SoDT" defaultValue={this.state.SoDT} onChange={this.onChangeValueInput} className="form-control" />
                </div>
                <button className="btn btn-success" type="submit">
                    OK
                </button>
            </form>
        ) : (<p>Không hiển thị được thông tin tài khoản</p>)
        return (
            <div className="userPage">
                <div className="userPage__content myContainer">
                    <div className="userPage__content--cover">
                        <div className="userImg">
                            <img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" alt="Avatar" img-fluid="true"/>
                        </div>
                        <div className="userName">
                            {/* {this.props.tenTaiKhoan} */}
                        </div>
                        <div className="user-type">
                            <p>Học viên</p>
                        </div>
                        <div className="user-tab">
                            <ul className="nav nav-pills mb-4">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#dskhhoc">Khóa học của tôi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#thongtinngdug">Thay đổi thông tin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="userPage__content--info">
                        <div className="tab-content">
                            <div className="tab-pane container active" id="dskhhoc">
                                <div className="user-courseList" id="accordion">
                                    {/* {this.props.khoaHocDcGhiDanh} */}
                                </div>
                            </div>
                            <div className="tab-pane container fade" id="thongtinngdug">
                                <div className="user-info" id="accordion">
                                    {showForm}
                                </div>
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
        tenTaiKhoan: state.storeCourseReducer.TenTaiKhoan,
        khoaHocDcGhiDanh: state.storeCourseReducer.KhoaHocDcGhiDanh,
        thongTinTaiKhoan: state.storeCourseReducer.ThongTinTaiKhoan,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUserCourseComponent: (taiKhoan) => {
            dispatch(getUserCourse(taiKhoan))
        },
        getUserInfoComponent: (taiKhoan) => {
            dispatch(getUserInfo(taiKhoan))
        },
        editUserComponent: (userInfo) => {
            dispatch(editUser(userInfo))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(userPage);