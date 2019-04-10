import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { logOutAdmin } from '../../redux/actions/admin.actions';

class headerTop extends Component {
    render() {
        return (
            <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            {/* <form class="form-header" action="" method="POST">
                                      <input class="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                                      <button class="au-btn--submit" type="submit">
                                          <i class="zmdi zmdi-search"></i>
                                      </button>
                                  </form> */}
                            <div className="header-button">
                                <div className="noti-wrap">
                                    <div className="noti__item js-item-menu">
                                        <FontAwesomeIcon icon="envelope" />
                                    </div>
                                    <div className="noti__item js-item-menu">
                                        <FontAwesomeIcon icon="bell" />
                                    </div>
                                    <div className="noti__item js-item-menu">
                                        <FontAwesomeIcon icon="smile" />
                                    </div>
                                </div>
                                <div className="account-wrap">
                                    <div className="account-item clearfix js-item-menu">
                                        <div className="dropdown open">
                                            Giáo vụ:
                                            <button className="ml-2 dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <p style={{fontWeight: 600}} classname="lead display-5"> {this.props.TaiKhoanAdmin}</p>

                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                                <p onClick={() => { this.props.logOutAdComponent() }} className="dropdown-item" >Đăng xuất</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        TaiKhoanAdmin: state.storeAdminReducer.TaiKhoanAd
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logOutAdComponent: () => {
            dispatch(logOutAdmin())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(headerTop);