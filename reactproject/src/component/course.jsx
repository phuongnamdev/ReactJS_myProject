import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class course extends Component {
    render() {
        let { khoahoc } = this.props;
        return (
            <div className="course-item">
                <div className="course-img">
                    <img src={khoahoc.HinhAnh} img-fluid="true" alt="Course" />
                </div>
                <div className="course-details">
                    <h2>{khoahoc.TenKhoaHoc}</h2>
                </div>
                <div className="course-decs">
                    <div className="course-creator">
                        {khoahoc.NguoiTao}
                    </div>
                    <div className="d-flex">
                        <div className="course-star">
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                        </div>
                        <div className="course-view">
                            <FontAwesomeIcon icon="user" /><span>{khoahoc.LuotXem}</span>
                        </div>
                    </div>
                </div>
                <div className="course-btn">
                    <Link to={"/coursedetails/" + khoahoc.MaKhoaHoc}>
                        <button className="course-btn" type="button">Xem chi tiết</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default course;