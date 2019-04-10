import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class banner extends Component {
    render() {
        return (
            <div className="banner text-center">
                <div className="banner-overlay"></div>
                <div className="banner-text">
                    <h1 className="display-4">EDU</h1>
                    <p className="lead">Trở thành chuyên gia lập trình từ con số 0</p>
                    <hr className="my-4" />
                    <p>Form Zero to Hero.</p>
                    <p className="lead">
                        <Link to="/courseList" className="btn btn-primary btn-lg" role="button">Danh sách khóa học</Link>
                    </p>
                </div>
            </div>

        );
    }
}

export default banner;