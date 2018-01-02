import {connect} from "react-redux";
import Login from "../components/Login";
import * as action from '../actions/login';

const mapStateToProps = (state) => {
    return {
        value: state.Login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showHello: () => {
            dispatch(action.getHello())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)