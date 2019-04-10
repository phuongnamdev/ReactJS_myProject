import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourseDetails } from '../../redux/actions/course.actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class courseDetails extends Component {
    componentDidMount() {
        this.props.getCourseDetailsComponent(this.props.match.params.courseid);
    }

    render() {
        return (
            <div className="course-details-page">
                <div className="details-top">
                    <div className="details-top__overlay" />
                    <div className="details-top-content">
                        <div className="details-top__item">
                            <div className="details-top__item--title">
                                {this.props.ChiTietKH.TenKhoaHoc}
                            </div>
                            <div className="details-top__item--star">
                                <span><FontAwesomeIcon icon="star" /></span>
                                <span><FontAwesomeIcon icon="star" /></span>
                                <span><FontAwesomeIcon icon="star" /></span>
                                <span><FontAwesomeIcon icon="star" /></span>
                            </div>
                        </div>
                        <div className="details-top__item">
                            <div className="details-top__item--img">
                                <img src={this.props.ChiTietKH.HinhAnh} alt="Course" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* END DETAILS-TOP */}
                <div className="details-content myContainer">
                    <div className="details-tab">
                        <ul className="nav nav-pills mb-4">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#thtinchug">Thông tin chung</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#noidung">Chương trình học</a>
                            </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                            <div className="tab-pane container active" id="thtinchug">
                                <div className="details-info">
                                    <div className="details-info__overview">
                                        <h3>nội dung khóa học</h3>
                                        <p>{this.props.ChiTietKH.MoTa}</p>
                                    </div>
                                    <div className="details-info__request">
                                        <h3>yêu cầu khóa học</h3>
                                        <ul>
                                            <li>Yêu cầu có smartphone hoặc máy tính để thực hành</li>
                                            <li>Máy tính kết nối mạng ổn định</li>
                                            <li>Không gian học yên tĩnh</li>
                                        </ul>
                                    </div>
                                    <div className="details-benefit">
                                        <h3>lợi ích khóa học</h3>
                                        <div className="details-benefit__content d-flex">
                                            <ul>
                                                <li><span className="details-icon  mr-3">                        <FontAwesomeIcon icon="check-circle" /></span>
                                                    <span>Sau khóa học bạn có thể tạo ra cho mình
                                                      những trang web tĩnh cho riêng mình, cùng với đó là kiến thức nền tảng
                                                      vững
                      chắc để giúp bạn có thể tiếp tục học các khóa học nâng cao.</span>
                                                </li>
                                                <li><span className="details-icon mr-3">                        <FontAwesomeIcon icon="check-circle" /></span>
                                                    <span>Ngoài ra khi tham gia khóa học, học
                                                      viên sẽ được những giảng viên - là những người đã có rất nhiều kinh
                                                      nghiệm
                                                      trong chuyên môn, từ đó có thể chia sẻ cho bạn rất nhiều kinh nghiệm
                                                      cũng
                      như tài nguyên để phục vụ công việc sau này của bạn.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane container fade" id="noidung">
                                <div className="details-program">
                                    <div className="details-program__lesson" id="accordion">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Chương 1: Giới thiệu
                  </button>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <ul>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 1:</div>
                                                            <div className="col-md-10 col-sm-12">Anim pariatur cliche
                                                              reprehenderit, enim eiusmod high life accusamus terry
                          richardson ad squid.</div>
                                                        </li>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 2:</div>
                                                            <div className="col-md-10 col-sm-12">Food truck quinoa nesciunt laborum
                                                              eiusmod. Brunch 3 wolf
                          moon tempor.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Chương 2: Kiến thức cơ bản
                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="card-body">
                                                    <ul>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 3</div>
                                                            <div className="col-md-10 col-sm-12">Anim pariatur cliche
                                                              reprehenderit, enim eiusmod high life accusamus terry
                          richardson ad squid.</div>
                                                        </li>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 4:</div>
                                                            <div className="col-md-10 col-sm-12">Food truck quinoa nesciunt laborum
                                                              eiusmod. Brunch 3 wolf
                          moon tempor.</div>
                                                        </li>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 5:</div>
                                                            <div className="col-md-10 col-sm-12">Lorem, ipsum dolor sit amet
                          consectetur adipisicing elit. Illo.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Chương 3: Kiến thức nâng cao &amp; bài tập
                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body">
                                                    <ul>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 6:</div>
                                                            <div className="col-md-10 col-sm-12">Anim pariatur cliche
                          reprehenderit.</div>
                                                        </li>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 7:</div>
                                                            <div className="col-md-10 col-sm-12">Food truck quinoa nesciunt laborum
                                                              eiusmod. Brunch 3 wolf
                          moon tempor.</div>
                                                        </li>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 8:</div>
                                                            <div className="col-md-10 col-sm-12">Lorem, ipsum dolor sit amet
                          consectetur adipisicing elit. Illo.</div>
                                                        </li>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 9:</div>
                                                            <div className="col-md-10 col-sm-12">Lorem, ipsum dolor sit amet
                          consectetur adipisicing elit. Illo.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingFour">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        Chương 4: Đồ án thực tế
                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                                <div className="card-body">
                                                    <ul>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 10:</div>
                                                            <div className="col-md-10 col-sm-12">Anim pariatur cliche
                                                              reprehenderit, enim eiusmod high life accusamus terry
                          richardson ad squid.</div>
                                                        </li>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 11:</div>
                                                            <div className="col-md-10 col-sm-12">Food truck quinoa nesciunt laborum
                                                              eiusmod. Brunch 3 wolf
                          moon tempor.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingFive">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        Chương 5: Chia sẻ kinh nghiệm phỏng vấn &amp; làm việc
                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                                <div className="card-body">
                                                    <ul>
                                                        <li className="row">
                                                            <div className="col-md-2 col-sm-12 lesson-number">Bài 12:</div>
                                                            <div className="col-md-10 col-sm-12">Anim pariatur cliche
                          reprehenderit, enim eiusmod high life.</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details-cover">
                        <ul>
                            <li>
                                <p>Nguời tạo: <span>{this.props.ChiTietKH.NguoiTao}</span></p>
                            </li>
                            <li>
                                <p>Số bài học: <span>25</span></p>
                            </li>
                            <li>
                                <p>Thời lượng video: <span>02: 55: 00</span></p>
                            </li>
                            <li>
                                <p>Hoàn thành khóa học <span>0/25 (0%)</span></p>
                            </li>
                            <li className="details-cover__btn">
                                <button className="btn-success">đăng kí học</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        ChiTietKH: state.storeCourseReducer.ChiTietKhoaHoc,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCourseDetailsComponent: (courseID) => {
            dispatch(getCourseDetails(courseID))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(courseDetails);