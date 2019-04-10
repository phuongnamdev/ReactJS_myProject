import React, { Component } from 'react';
import { connect } from 'react-redux';

import CourseAdmin from '../../component/admin/courseAdmin';
import ModalAddCourse from '../../component/admin/modal/modalAddCourse';


class adminCourse extends Component {
    renderCourseList = () => {
        if (this.props.DSKH) {
            return this.props.DSKH.map((course, index) => {
                return <CourseAdmin key={index} course={course} />
            })
        }
    }

    render() {
        return (
            <div>
                <ModalAddCourse />
                <div className="row mt-5">
                    {this.renderCourseList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        DSKH: state.storeAdminReducer.DanhSachKhoaHoc
    }
}
export default connect(mapStateToProps, null)(adminCourse);