import {connect} from "react-redux";
import Login from "../components/Login";
import * as action from '../actions/login';

const mapStateToProps = (state) => {
    return {
        hello: state.Login.hello
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showHello: () => {
            dispatch(action.login())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)