import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addCourse } from '../../../redux/actions/admin.actions';

class modalAddCourse extends Component {
    state = {
        open: false,
        MaKhoaHoc: '',
        TenKhoaHoc: '',
        HinhAnh: '',
        LuotXem: '',
        NguoiTao: '',
        MoTa: '',
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
    ThemKhoaHoc = (e) => {
        e.preventDefault();
        const courseIsAdd = {
            MaKhoaHoc: this.state.MaKhoaHoc,
            TenKhoaHoc: this.state.TenKhoaHoc,
            HinhAnh: this.state.HinhAnh,
            LuotXem: this.state.LuotXem,
            NguoiTao: this.props.ngTao,
            MoTa: this.state.MoTa,
        }       
        this.props.addCourseComponent(courseIsAdd)
    }
    render() {
        return (
            <div>
                <Button variant="success" onClick={this.handleClickOpen}>Thêm khóa học</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Thêm người dùng</DialogTitle>
                    <form onSubmit={this.ThemKhoaHoc}>
                        <DialogContent>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Mã khóa học</label>
                                        <input type="text" name="MaKhoaHoc" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Tên khóa học</label>
                                        <input type="text" name="TenKhoaHoc" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Link hình ảnh</label>
                                        <input type="text" name="HinhAnh" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Mô tả</label>
                                        <input type="text" name="MoTa" onChange={this.onChangeValueInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Lượt xem</label>
                                        <input type="number" name="LuotXem" onChange={this.onChangeValueInput} className="form-control" />
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

const mapStateToProps = (state)=>{
    return{
        ngTao: state.storeAdminReducer.TaiKhoanAd
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCourseComponent: (course) => {
            dispatch(addCourse(course))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(modalAddCourse);