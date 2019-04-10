import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginAdmin from '../pages/adminPage/loginAdmin';
import Dashboard from '../pages/adminPage/dashboard';
import AdminCourse from '../pages/adminPage/adminCourse';
import AdminUser from '../pages/adminPage/adminUser';
import HeaderAdmin from '../pages/adminPage/headerAdmin';
import HeaderTop from '../pages/adminPage/headerTop';

import { getUserList, getCourseList, checkAdLogin } from '../redux/actions/admin.actions';


class adminTemplate extends Component {
    componentDidMount() {
        this.props.getUserListComponent();
        this.props.getCourseListComponent();
        this.props.checkAdminLoginComponent();
    }
    render() {
        return (

            <BrowserRouter>
                <Fragment>
                    <div className="page-wrapper">
                        {this.props.isLoginAd ? null : <LoginAdmin />}
                        <HeaderAdmin />
                        <div className="page-container">
                            <HeaderTop />
                            {/* MAIN CONTENT*/}
                            <div className="main-content">
                                <div className="section__content section__content--p30">
                                    <div className="container-fluid">
                                        <Route path="/admin/admindashboard" component={Dashboard} />
                                        <Route path="/admin/amdincourse" component={AdminCourse} />
                                        <Route path="/admin/adminuser" component={AdminUser} />
                                        <Route path="/admin" exact component={Dashboard} />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="copyright">
                                                    <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        isLoginAd: state.storeAdminReducer.IsLoginAdmin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        checkAdminLoginComponent: ()=>{
            dispatch(checkAdLogin())
        },
        getUserListComponent: () => {
            dispatch(getUserList())
        },
        getCourseListComponent: ()=>{
            dispatch(getCourseList())
        },

    }   
}
export default connect(mapStateToProps, mapDispatchToProps)(adminTemplate);