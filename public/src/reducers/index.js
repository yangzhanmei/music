import {combineReducers} from "redux";
import Login from './login';
import NavReducer from './navReducer';
import Register from './register';

export default combineReducers({
    NavReducer,
    Login,
    Register
})