import React, { Component, Fragment } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from "../layout/header";
import Footer from "../layout/footer";
import HomePage from '../pages/homePage/homePage';
import CourseList from '../pages/homePage/courseList';
import Coursedetail from '../pages/homePage/courseDetails';
import UserPage from '../pages/homePage/userPage';

class homeTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <Route path="/home" component={HomePage} />
                    <Route path="/courseList" component={CourseList} />
                    <Route path="/userpage" component={UserPage} />
                    <Route path="/coursedetails/:courseid" component={Coursedetail} />
                    <Route path="/" exact component={HomePage} />
                    <Footer />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default homeTemplate;