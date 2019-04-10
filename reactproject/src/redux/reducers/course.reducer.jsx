import * as types from "../constants/course.constants";

const storeStateDefault = {
    DanhSachKhoaHoc: [],
    ChiTietKhoaHoc: {},
    TenTaiKhoan: '',
    KhoaHocDcGhiDanh: [],
    ThongTinTaiKhoan: [],
    IsLogin: false,
    IsSignUp: false,
}

const storeCourseReducer = (state=storeStateDefault, action)=>{
    switch(action.type){
        case (types.GET_COURSE):{
            const DSKH = action.DanhSachKhoaHoc;
            state.DanhSachKhoaHoc = DSKH;
            return {...state}
        }
        case(types.GET_COURSE_DETAILS):{
            const ChiTietKH = action.ChiTietKhoaHoc;
            state.ChiTietKhoaHoc = ChiTietKH;
            return {...state}
        }
        case(types.SIGN_IN):{
            const tenTaiKhoan = action.TenTaiKhoan;
            state.TenTaiKhoan = tenTaiKhoan;
            state.IsLogin = true;
            return {...state}
        }
        case(types.CHECK_IS_LOGIN):{
            const userIsLogin = localStorage.getItem("userLogin");            
            if (userIsLogin != null){
                state.IsLogin = true;
                state.TenTaiKhoan = JSON.parse(userIsLogin).TaiKhoan;
            }
            return {...state}
        }
        case(types.SIGN_UP):{
            const isSignUp = action.IsSignUp;
            state.IsSignUp = isSignUp;
            return {...state}
        }
        case(types.LOG_OUT):{
            localStorage.removeItem("userLogin");
            state.IsLogin = false;
            state.TenTaiKhoan = '';
            return {...state}
        }
        case(types.GET_USER_COURSE):{
            const KhoaHocDcGhiDanh = action.KhoaHocDcGhiDanh
            state.KhoaHocDcGhiDanh = KhoaHocDcGhiDanh;
            return {...state}
        }
        case(types.GET_USER_INFO):{
            const userInfo = action.ThongTinTaiKhoan;
            state.ThongTinTaiKhoan = userInfo;
            return {...state}
        }
        default: return {...state}
    }
}
export default storeCourseReducer;