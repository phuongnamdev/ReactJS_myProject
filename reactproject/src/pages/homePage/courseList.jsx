import React, { Component } from 'react';
import { connect } from 'react-redux';
import Course from "../../component/course";


class courseList extends Component {
    renderCourseList = () => {
        return this.props.DSKH.map((course, index) => {
            return <Course khoahoc={course} key={index} />
        })
    }

    render() {
        return (
            <div className="course-list-page">
                <div className="page-title">
                    danh sách khóa học
                </div>
                <div className="page-content myContainer">
                    {this.renderCourseList()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        DSKH: state.storeCourseReducer.DanhSachKhoaHoc
    }
}
export default connect(mapStateToProps, null)(courseList);