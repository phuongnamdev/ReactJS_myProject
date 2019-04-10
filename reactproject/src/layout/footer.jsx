import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content myContainer">
                    <div className="row">
                        <div className="footer-logo col-md-3 col-sm-12">
                            EDU
                        </div>
                        <div className="footer-about col-md-6 col-sm-12">
                            <h2 className="title-footer">Giới thiệu về chúng tôi</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos obcaecati deleniti tempore
                            repellendus labore dolore officia ipsa corporis ut rem, animi inventore, praesentium optio nisi impedit
                            culpa officiis. Est, ipsa?</p>
                        </div>
                        <div className="footer-social col-md-3 col-sm-12">
                            <h3 className="title-footer">Theo dõi chúng tôi</h3>
                            <div className="social-item">
                            <span><i className="fab fa-facebook-square" /></span>
                            <span><i className="fab fa-youtube-square" /></span>
                            <span><i className="fab fa-twitter-square" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="myContainer footer-bottom-content">
                        <div className="footer-copyright">
                            COPYRIGHT ©EDU - ALL RIGHTS RESERVED.
                        </div>
                        <div className="footer-link ml-auto">
                            <p>Tuyển dụng</p>
                            <p>Hệ thống giảng dạy</p>
                            <p>Tư vấn</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;