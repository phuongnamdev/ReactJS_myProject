import * as types from "../constants/course.constants";
import Axios from "axios";

// ACTION KHOA HOC
export const getCourseList = ()=>{
    return (dispatch)=>{
        Axios({
            method: "GET",
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc",
        }).then(result =>{
            dispatch({
                type: types.GET_COURSE,
                DanhSachKhoaHoc: result.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const getCourseDetails = (id)=>{
    return (dispatch)=>{
        Axios({
            method: "GET",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/ChiTietKhoaHoc/${id}`,
        }).then(result=>{
            dispatch({
                type: types.GET_COURSE_DETAILS,
                ChiTietKhoaHoc: result.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }
}
//
//DANG NHAP - DANG KY
export const signIn = (taikhoan, matkhau)=>{
    return (dispatch)=>{
        Axios({
            method: "GET",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`,
        }).then(result=>{  
            if(typeof(result.data) === 'object'){
                dispatch({
                    type: types.SIGN_IN,
                    TenTaiKhoan: result.data[0].TaiKhoan
                })
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const checkIsLogin = ()=>{
    return (dispatch)=>{
        dispatch({
            type: types.CHECK_IS_LOGIN,
        })
    }
}
export const signUp = (userInfo) =>{
    return (dispatch)=>{
        Axios({
            method: "POST",
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DangKy",
            data: userInfo,
        }).then(result=>{            
            if(result.data){
                dispatch({
                    type: types.SIGN_UP,
                    IsSignUp: result.data,
                })
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const logOut = ()=>{
    return ()=> {
        localStorage.removeItem("userLogin");
        setTimeout(()=>{
            window.location.reload()
        },300)
    }
}
export const getUserCourse = (taiKhoan)=>{
    return (dispatch)=>{
        Axios({
            method: "GET",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/LayThongTinKhoaHoc?taikhoan=${taiKhoan}`
        }).then(result=>{                                       
            if (typeof(result.data) === 'object' && result.data.length > 0){
                dispatch({
                    type: types.GET_USER_COURSE,
                    KhoaHocDcGhiDanh: result.data[0]
                }) 
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const getUserInfo = (taiKhoan)=>{
    return (dispatch)=>{
        Axios({
            method: "GET",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan=${taiKhoan}`
        }).then(result=>{
            if(typeof(result.data) === 'object' && result.data.length > 0){
                dispatch({
                    type: types.GET_USER_INFO,
                    ThongTinTaiKhoan: result.data[0],
                })
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const editUser = (userInfo)=>{
    return ()=>{
        Axios({
            method: "PUT",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`,
            data: userInfo
        }).then(res=>{
            if(typeof(res.data) === 'object'){
                window.location.reload()
            }
        }).catch(err=>{
            console.log(err);
            
        })
    }
}
