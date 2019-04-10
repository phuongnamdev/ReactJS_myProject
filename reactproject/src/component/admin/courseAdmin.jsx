import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { deletaCourse, getCourseDetails, updateCourse } from '../../redux/actions/admin.actions';

class courseAdmin extends Component {
    state = {
        open: false,
        MaKhoaHoc: '',
        TenKhoaHoc: '',
        HinhAnh: '',
        LuotXem: '',
        NguoiTao: '',
        MoTa: '',
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.ThongTinKhHoc && nextProps) {
            this.setState({
                MaKhoaHoc: nextProps.ThongTinKhHoc.MaKhoaHoc,
                TenKhoaHoc: nextProps.ThongTinKhHoc.TenKhoaHoc,
                HinhAnh: nextProps.ThongTinKhHoc.HinhAnh,
                LuotXem: nextProps.ThongTinKhHoc.LuotXem,
                NguoiTao: nextProps.ThongTinKhHoc.NguoiTao,
                MoTa: nextProps.ThongTinKhHoc.MoTa,
            })
        }
    }
    handleClickOpen = (makhoahoc) => {
        this.props.getCourseDetailsComponent(makhoahoc);
        setTimeout(() => {
            this.setState({ open: true });
        }, 500)
    };
    handleClose = () => {
        this.setState({
            open: false,
            MaKhoaHoc: '',
            TenKhoaHoc: '',
            HinhAnh: '',
            LuotXem: '',
            NguoiTao: '',
            MoTa: '',
        });
    };
    onChangeValueInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    CapNhatKhHoc = (e) => {
        e.preventDefault();
        const courseIsUpdate = {
            MaKhoaHoc: this.state.MaKhoaHoc,
            TenKhoaHoc: this.state.TenKhoaHoc,
            HinhAnh: this.state.HinhAnh,
            LuotXem: this.state.LuotXem,
            NguoiTao: this.state.NguoiTao,
            MoTa: this.state.MoTa,
        }                     
        this.props.updateCourseComponent(courseIsUpdate)
    }
    render() {
        let { course } = this.props;
        return (
            <div className="col-md-4 col-sm-12">
                <div className="card">
                    <img className="card-img-top" src={course.HinhAnh} alt="" />
                    <div className="card-body">
                        <p>Mã khóa học: {course.MaKhoaHoc}</p>
                        <h4 className="card-title mb-3">{course.TenKhoaHoc}</h4>
                        <p className="card-text">{course.MoTa}
                        </p>
                        <div className="row">
                            <div className="col-md-6">Lượt xem: {course.LuotXem}</div>
                            <div className="col-md-6">Người tạo: {course.NguoiTao}</div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" onClick={() => { this.handleClickOpen(course.MaKhoaHoc) }}>Cập nhật</button>
                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Cập nhật khóa học</DialogTitle>
                            <form onSubmit={this.CapNhatKhHoc}>
                                <DialogContent>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="">Mã khóa học</label>
                                                <input type="text" name="MaKhoaHoc" readOnly onChange={this.onChangeValueInput} defaultValue={this.state.MaKhoaHoc} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Tên khóa học</label>
                                                <input type="text" name="TenKhoaHoc" defaultValue={this.state.TenKhoaHoc} onChange={this.onChangeValueInput} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Link hình ảnh</label>
                                                <input type="text" name="HinhAnh" defaultValue={this.state.HinhAnh} onChange={this.onChangeValueInput} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="">Mô tả</label>
                                                <input type="text" name="MoTa" defaultValue={this.state.MoTa} onChange={this.onChangeValueInput} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Lượt xem</label>
                                                <input type="number" name="LuotXem" defaultValue={this.state.LuotXem} onChange={this.onChangeValueInput} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Người tạo</label>
                                                <input type="text" name="NguoiTao" readOnly defaultValue={this.state.NguoiTao} onChange={this.onChangeValueInput} className="form-control" />
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
                        </Dialog>
                        <button className="btn btn-danger" onClick={() =>
                            this.props.deleteCourseComponent(course.MaKhoaHoc)}>Xóa</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        ThongTinKhHoc: state.storeAdminReducer.ChiTietKhoaHoc
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCourseComponent: (makhoahoc) => {
            dispatch(deletaCourse(makhoahoc))
        },
        getCourseDetailsComponent: (makhoahoc)=>{
            dispatch(getCourseDetails(makhoahoc))
        },
        updateCourseComponent: (course)=>{
            dispatch(updateCourse(course))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(courseAdmin);