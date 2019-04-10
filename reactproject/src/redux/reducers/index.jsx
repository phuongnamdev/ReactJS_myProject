import {combineReducers} from 'redux';
import storeCourseReducer from "./course.reducer";
import storeAdminReducer from "./admin.reducers";
const rootReducer = combineReducers(
    {
        storeCourseReducer, storeAdminReducer
    }
)
export default rootReducer;