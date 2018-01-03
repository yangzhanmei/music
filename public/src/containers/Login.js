import {connect} from "react-redux";
import Login from "../components/Login";
import * as action from '../actions/login';

const mapStateToProps = (state) => {
    return {
        information: state.Login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (obj, callback) => {
            dispatch(action.login(obj, callback))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)