import {connect} from "react-redux";
import Register from "../components/Register";
import * as action from '../actions/register';

const mapStateToProps = (state) => {

    return {
        isSuccess: state.Register
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        register: (obj, callback) => {
            dispatch(action.register(obj, callback))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register)