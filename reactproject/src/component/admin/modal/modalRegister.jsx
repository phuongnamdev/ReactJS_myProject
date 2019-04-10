import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class modalRegister extends Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps){
            console.log(nextProps);
            
        }
    }
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const DSKhHoc = this.props.DSKhHoc.map((course, index)=>{
            return (
                <option key={index} value={course.MaKhoaHoc}>{course.TenKhoaHoc}</option>
            )
        })
        return (
            <div>
                <button onClick={this.handleClickOpen}>
                    <FontAwesomeIcon icon="registered" />
                </button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Cập nhật người dùng</DialogTitle>
                    <form onSubmit={this.CapNhatNgDung}>
                        <DialogContent>
                            <p>Tên tài khoản đang ghi danh:</p>
                            <select className="form-control" onChange={this.onChangeValueInput} >
                                {DSKhHoc}
                            </select>
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
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        DSKhHoc: state.storeAdminReducer.DanhSachKhoaHoc
    }
}
export default connect(mapStateToProps, null)(modalRegister);