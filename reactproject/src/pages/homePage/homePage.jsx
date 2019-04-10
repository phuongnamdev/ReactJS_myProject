import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCourseList} from "../../redux/actions/course.actions";
import Contact from "../../layout/contact";
import Banner from '../../layout/banner';
import CourseListHome from '../../layout/courseListHome';
import Teacher from '../../layout/teacher';


class homePage extends Component {
    componentDidMount(){
        this.props.getCourseListCompoent()
    }
    renderCourseList = ()=>{
        console.log(this.props.DSKH);
    }
    render() {
        return (
            <div className="mt-5">
                <Banner />
                <CourseListHome />
                <Teacher />
                <Contact />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        DSKH: state.storeCourseReducer.DanhSachKhoaHoc
    }
}
const mapDispatchToProps = (dispacth)=>{
    return{
        getCourseListCompoent: ()=>{
            dispacth(getCourseList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);