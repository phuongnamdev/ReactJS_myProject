import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact-overlay"></div>
                <div className="contact-content">
                    <div className="contact-title">
                        <h2>Liên hệ</h2>
                        <p>Hãy liên lạc với chúng tôi khi bạn có bất kì thắc mắc hay cần được tư vấn bạn nhé!</p>
                        </div>
                    <div className="row">
                        <div className="contact-info col-md-4 col-sm-12">
                            <h3>Thông tin:</h3>
                            <div className="info-details">
                                <ul>
                                    <li><span><FontAwesomeIcon icon="map-marked" /></span> 459 Sư Vạn Hạnh, Q.10, Tp.Hồ Chí
                                    Minh</li>
                                    <li><span><FontAwesomeIcon icon="phone" /></span> (+84)98 984 532</li>
                                    <li><span><FontAwesomeIcon icon="envelope" /></span> edu@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div className="contact-form">
                                <div className="row">
                                    <div className="col-md-12 text-center mb-5">Nhắn tin cho chúng tôi</div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-input">
                                            <input type="text" placeholder="Tên của bạn" />
                                        </div>
                                        <div className="form-input">
                                            <input type="text" placeholder="Email của bạn" />
                                        </div>
                                        <div className="form-input">
                                            <input type="text" placeholder="Số điện thoại của bạn" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <textarea className="form-message" placeholder="Tin nhắn của bạn dành cho trung tâm" cols={30} rows={7} defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default contact;