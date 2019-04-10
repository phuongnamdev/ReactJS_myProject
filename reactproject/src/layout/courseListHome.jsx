import React, { Component } from 'react';
import { connect } from 'react-redux';

class courseListHome extends Component {
    render() {
        const course = this.props.DSKhoaHoc === true ? (           
            this.props.DSKhoaHoc.slice(1, 4).map((course) => {
                return (
                    <div className="course-item">
                        <div className="course-img">
                            <img src={course.HinhAnh} img-fluid="true" alt="Course" />
                        </div>
                        <div className="course-name">
                            <h3>{course.TenKhoaHoc}</h3>
                        </div>
                    </div>)
            })
        ) : null;
        return (
            <div className="course-list myContainer">
                <div className="course-title">
                    khóa học nổi bật
                </div>
                <div className="course-desc">
                    Tất cả các khóa học đều cung cấp kiến thức căn bản một cách vững vàng cho học viên, song song đó là những bài
                    tập và các đồ án giúp cho các học viên nắm rõ từ lý thuyết đến thực hành trong suốt quá trình học, ngoài ra từ
                    những đồ án trên có thể giúp học viên hiểu thêm và có kinh nghiệm về quá trình làm việc trong công ty.
                </div>
                <div className="course-content text-center">
                    {course}
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        DSKhoaHoc: state.storeCourseReducer.DanhSachKhoaHoc
    }
}
export default connect(mapStateToProps, null)(courseListHome);