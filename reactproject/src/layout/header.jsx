import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal, Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField } from '@material-ui/core';
import SweetAlert from 'sweetalert2-react';
import { signUp, signIn, checkIsLogin, logOut, getUserCourse, getUserInfo } from '../redux/actions/course.actions';
const initialState = {
    show: false,
    showSwAlert: false,
    showSwAlertDKy: false,
    TaiKhoanDN: '',
    TaiKhoanDNErr: '',
    MatKhauDN: '',
    MatKhauDNErr: '',
    TaiKhoan: '',
    TaiKhoanErr: '',
    MatKhau: '',
    HoTen: '',
    Email: '',
    EmailErr: '',
    SoDT: '',
    MaLoaiNguoiDung: 'HV',
    DangKiErr: '',
}
class header extends Component {
    state = initialState;
    onChangeValueInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // Modal show & hide
    handleClose() {
        this.setState(initialState);
    }
    handleShow() {
        this.setState({ show: true });
    }
    //
    //Sweet Alert show & close
    handleSwAlertShow() {
        this.setState({ showSwAlert: true })
    }
    handleSwAlertShowDangKy() {
        this.setState({ showSwAlertDKy: true })
    }
    handleSwAlertClose() {
        this.setState({ showSwAlert: false, showSwAlertDKy: false })
    }
    //
    //DropDown
    handleClickDropDown() {
        this.setState({ showDropDown: true });
    };

    handleCloseDropDown() {
        this.setState({ showDropDown: true });
    };
    //
    componentDidMount() {
        this.props.checkIsLoginComponent();
    }
    getUserDetails = () => {
        this.props.getUserCourseComponent(this.props.tenTaiKhoan);
        this.props.getUserInfoComponent(this.props.tenTaiKhoan)

    }
    validate = () => {
        let TKErr = '';
        let MKErr = '';
        if (!this.state.TaiKhoanDN) {
            TKErr = "Tài khoản không được để trống"
        }
        if (!this.state.MatKhauDN) {
            MKErr = "Mật khẩu không được để trống"
        }
        if (TKErr || MKErr) {
            this.setState({
                TaiKhoanDNErr: TKErr, MatKhauDNErr: MKErr
            })
            return false;
        }
        return true;
    }
    validateDangKi = () => {
        let DangKiErr = '';
        let TaiKhoanErr = '';
        let EmailErr = '';
        if (!this.state.MatKhau && !this.state.HoTen && !this.state.SoDT) {
            DangKiErr = "Vui lòng nhập đầy đủ thông tin để đăng kí"
        }
        if (this.state.TaiKhoan.length < 5) {
            TaiKhoanErr = "Tên tài khoản phải trên 5 kí tự"
        }
        if (!this.state.Email.includes("@")) {
            EmailErr = `Email phải có định dạng abc@gmail.com`
        }
        if (DangKiErr || TaiKhoanErr || EmailErr) {
            this.setState({
                TaiKhoanErr: TaiKhoanErr,
                DangKiErr: DangKiErr,
                EmailErr: EmailErr
            })
            return false
        }
        return true;
    }
    DangNhap = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.props.signInComponent(this.state.TaiKhoanDN, this.state.MatKhauDN)
            const userLogin = {
                TaiKhoan: this.state.TaiKhoanDN,
                MatKhau: this.state.MatKhauDN,
            }
            setTimeout(() => {
                if (this.props.isLogin) {
                    localStorage.setItem("userLogin", JSON.stringify(userLogin))
                }
            }, 1000)
        }
    }
    DangKy = (e) => {
        e.preventDefault();
        const isValid = this.validateDangKi()
        if (isValid) {
            const userInfo = {
                TaiKhoan: this.state.TaiKhoan,
                MatKhau: this.state.MatKhau,
                Email: this.state.Email,
                SoDT: this.state.SoDT,
                MaLoaiNguoiDung: this.state.MaLoaiNguoiDung
            }
            this.props.signUpComponent(userInfo);
        }
    }
    render() {
        const SwAlertDN = this.props.isLogin === true ? (
            <SweetAlert
                show={this.state.showSwAlert}
                title="Đăng nhập thành công"
                onConfirm={() => this.setState(initialState)}
            />) : (
                <SweetAlert
                    show={this.state.showSwAlert}
                    title="Đăng nhập không thành công"
                    text="Tài khoản hoặc mật khẩu không đúng"
                    onConfirm={() => this.setState({ showSwAlert: false })}
                />)
        const SwAlertDK = this.props.isSignUp === true ? (
            <SweetAlert
                show={this.state.showSwAlertDKy}
                title="Đăng ký thành công"
                onConfirm={() => this.setState(initialState)}
            />) : null;
        const userLink = (
            <div className="dropdown myDropdown">
                <button className="btn dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Xin chào <span>{this.props.tenTaiKhoan}</span>

                </button>
                <div className="dropdown-menu" aria-labelledby="triggerId">
                    <Link to="/userpage" onClick={this.getUserDetails} className="dropdown-item">Thông tin tài khoản</Link>
                    <div className="dropdown-divider" />
                    <p onClick={this.props.logOutComponent} className="dropdown-item">Đăng xuất</p>
                </div>
            </div>
        )
        const guestLink = (
            <p className="nav-link" onClick={this.handleShow.bind(this)}><FontAwesomeIcon icon="user-circle" />Đăng nhập</p>
        )
        return (
            <div className="header">
                <nav className="bg-light navbar navbar-expand-md fixed-top">
                    <Link to="/" className="navbar-brand">Edu</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to="/courseList" className="nav-link">Danh sách khóa học </Link>
                            </li>
                            {this.props.isLogin ? (
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={this.getUserDetails} to="/userpage">Khóa học của tôi</Link>
                                </li>
                            ) : null}
                            <li className="nav-item nav-user">
                                {this.props.isLogin ? userLink : guestLink}
                            </li>
                        </ul>
                    </div>
                </nav>

                <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                    <Tabs defaultActiveKey="dangnhap" id="uncontrolled-tab-example">
                        <Tab eventKey="dangnhap" title="ĐĂNG NHẬP">
                            <form onSubmit={this.DangNhap}>
                                <Modal.Body>
                                    <div className="form-group">
                                        <TextField
                                            name="TaiKhoanDN"
                                            onChange={this.onChangeValueInput}
                                            id="standard-full-width"
                                            label="Tài khoản"
                                            fullWidth
                                        />
                                        <div className="alert-warning">
                                            {this.state.TaiKhoanDNErr}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            name="MatKhauDN"
                                            onChange={this.onChangeValueInput}
                                            id="standard-password-input"
                                            label="Password"
                                            type="password"
                                            fullWidth
                                        />
                                        <div className="alert-warning">
                                            {this.state.MatKhauDNErr}
                                        </div>
                                        {SwAlertDN}
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="success" type="submit" onClick={this.handleSwAlertShow.bind(this)}>
                                        Đăng nhập
                                    </Button>
                                    <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                                        Hủy
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Tab>
                        <Tab eventKey="danhky" title="ĐĂNG KÝ">
                            <form onSubmit={this.DangKy}>
                                <Modal.Body>
                                    <div className="alert-danger my-3">
                                        {this.state.DangKiErr}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Tài khoản</label>
                                        <input type="text" name="TaiKhoan" onChange={this.onChangeValueInput} className="form-control" />
                                        <div className="alert-warning my-1">
                                            {this.state.TaiKhoanErr}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Mật khẩu</label>
                                        <input type="password" name="MatKhau" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Họ tên</label>
                                        <input type="text" name="HoTen" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="Email" onChange={this.onChangeValueInput} className="form-control" />
                                        <div className="alert-warning my-1">
                                            {this.state.EmailErr}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Số điện thoại</label>
                                        <input type="number" name="SoDT" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                    {SwAlertDK}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="success" type="submit" onClick={this.handleSwAlertShowDangKy.bind(this)}>
                                        Đăng ký
                                    </Button>
                                    <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                                        Hủy
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Tab>
                    </Tabs>;
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignUp: state.storeCourseReducer.IsSignUp,
        isLogin: state.storeCourseReducer.IsLogin,
        tenTaiKhoan: state.storeCourseReducer.TenTaiKhoan,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signInComponent: (taikhoan, matkhau) => {
            dispatch(signIn(taikhoan, matkhau))
        },
        signUpComponent: (userInfo) => {
            dispatch(signUp(userInfo))
        },
        checkIsLoginComponent: () => {
            dispatch(checkIsLogin())
        },
        logOutComponent: () => {
            dispatch(logOut())
        },
        getUserCourseComponent: (taiKhoan) => {
            dispatch(getUserCourse(taiKhoan))
        },
        getUserInfoComponent: (taiKhoan) => {
            dispatch(getUserInfo(taiKhoan))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(header);