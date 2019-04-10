import * as types from "../constants/admin.constants";
import Axios from "axios";

export const loginAdminAct = (taikhoanad, matkhauad)=>{
    return (dispatch)=>{
        Axios({
            method: "GET",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${taikhoanad}&matkhau=${matkhauad}`,
        }).then(result=>{  
            if(result.data[0]){
                if (result.data[0].MaLoaiNguoiDung === "GV"){
                    dispatch({
                        type: types.LOGIN_ADMIN,
                        TaiKhoanAd: result.data[0].TaiKhoan
                    })
                }else{
                    alert("Tài khoản hoặc mật khẩu không đúng \n Lưu ý: Chỉ dùng tài khoản cho Giáo Vụ để đăng nhập")
                }
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const checkAdLogin = ()=>{
    return (dispatch)=>{
        dispatch({
            type: types.CHECK_LOGIN_ADMIN,
        })
    }
}
export const logOutAdmin = ()=>{
    return ()=> {
        localStorage.removeItem("adminLogin");
        window.location.reload()
    }
}
//
export const getUserList = ()=>{
    return (dispatch)=>{
        Axios({
            method: "GET",
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
        }).then(result=>{
            dispatch({
                type: types.GET_USER_LIST,
                DSNG: result.data,
            })
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const addUser = (userInfo)=>{
    return ()=>{
        Axios({
            method: "POST",
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            data: userInfo
        }).then(result=>{
            if(typeof(result.data) === 'object'){
                alert("Thêm người dùng thành công")
                setTimeout(()=>{
                    window.location.reload()
                },1000)
            }
        }).catch(err=>{
            console.log(err);
            
        })
    }
}
export const deleteUser = (taiKhoan)=>{
    return ()=>{
        Axios({
            method: "DELETE",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`
        }).then(result=>{
            if(typeof(result.data) === 'object'){
                window.location.reload()
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
            setTimeout(()=>{
                if(typeof(result.data) === 'object' && result.data.length > 0){
                    dispatch({
                        type: types.GET_USER_INFO,
                        ThongTinNgDungCapNhat: result.data[0],
                    })
                }else{
                    console.log("Không hiển thi");   
                }
            }, 500)
        }).catch(err=>{
            console.log(err);
        })  
    }
}
export const updateUser = (userInfoUpdate)=>{
    return ()=>{
        Axios({
            method: "PUT",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`,
            data: userInfoUpdate
        }).then(res=>{
            if(typeof(res.data) === 'object'){
                window.location.reload()
            }
        }).catch(err=>{
            console.log(err); 
        })
    }
}
export const registerCourse = (userIsRegister)=>{
    return ()=>{
        Axios({
            method: "POST",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/GhiDanhKhoaHoc`,
            data: userIsRegister,
        }).then(res=>{
            if(res.data){
                window.location.reload()
            }         
        }).catch(err=>{
            console.log(err);          
        })
    }
}
//

// Action khóa học

export const getCourseList = () =>{
    return (dispatch)=>{
        Axios({
            method: "GET",
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc",
        }).then(result =>{
            dispatch({
                type: types.GET_COURSE_LIST,
                DanhSachKhoaHoc: result.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const addCourse = (course)=>{
    return ()=>{
        Axios({
            method: "POST",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc`,
            data: course,
        }).then(res=>{
            if(res.data){
                window.location.reload();
            }        
        }).catch(err=>{
            console.log(err);   
        })
    }
}
export const deletaCourse = (maKhoaHoc)=>{
    return ()=>{
        Axios({
            method: "DELETE",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/${maKhoaHoc}`
        }).then(res=>{
            if(res.data){
                window.location.reload();
            } 
        }).catch(err=>{
            console.log(err);
        })
        
    }
}
export const getCourseDetails = (maKhoaHoc)=>{
    return (dispatch)=>{
        Axios({
            method: "GET",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/ChiTietKhoaHoc/${maKhoaHoc}`
        }).then(result=>{
            if(result.data){
                dispatch({
                    type: types.GET_COURSE_DETAILS,
                    ThongTinKhHocCapNhat: result.data,
                })
            }else{
                console.log("Không hiển thị");   
            }           
        }).catch(err=>{
            console.log(err);
        })  
    }
}
export const updateCourse = (courseInfoUpdate)=>{
    return ()=>{
        Axios({
            method: "PUT",
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatKhoaHoc",
            data: courseInfoUpdate
        }).then(res=>{
            console.log(res);
            
            if(typeof(res.data) === 'object'){
                window.location.reload()
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}