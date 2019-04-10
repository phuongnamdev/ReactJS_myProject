import * as types from "../constants/admin.constants";
const adminStateDefualt = {
    IsLoginAdmin: false,
    TaiKhoanAd: '',
    DanhSachNguoiDung: [],
    ThongTinNgDungCapNhat: {},
    DanhSachKhoaHoc: [],
    ChiTietKhoaHoc: {},
}
const storeAdminReducer = (state = adminStateDefualt,action)=>{
    switch(action.type){
        case(types.LOGIN_ADMIN):{
            const TaiKhoanAd = action.TaiKhoanAd;
            state.TaiKhoanAd = TaiKhoanAd;
            state.IsLoginAdmin = true;
            localStorage.setItem("adminLogin", JSON.stringify(TaiKhoanAd))
            return {...state}
        }
        case(types.CHECK_LOGIN_ADMIN):{
            const adminIsLogin = localStorage.getItem("adminLogin");            
            if (adminIsLogin != null){
                state.IsLoginAdmin = true;
                state.TaiKhoanAd = JSON.parse(adminIsLogin);
            }
            return {...state}
        }
        case(types.GET_USER_LIST):{
            const DSNG = action.DSNG
            state.DanhSachNguoiDung = DSNG;            
            return {...state}
        }
        case(types.GET_USER_INFO):{
            const ThongTinNgDungCapNhat = action.ThongTinNgDungCapNhat
            state.ThongTinNgDungCapNhat = ThongTinNgDungCapNhat;            
            return {...state}
        }
        case(types.GET_COURSE_LIST):{
            state.DanhSachKhoaHoc = action.DanhSachKhoaHoc;
            return {...state}
        }
        case(types.GET_COURSE_DETAILS):{
            state.ChiTietKhoaHoc = action.ThongTinKhHocCapNhat;            
            return {...state}
        }
        default: return {...state}
    }
}
export default storeAdminReducer;