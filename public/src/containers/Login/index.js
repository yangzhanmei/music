import {connect} from "react-redux";
import Login from "../../components/Login/index";
import * as action from '../../actions/login/index';

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