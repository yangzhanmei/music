import {connect} from "react-redux";
import Register from "../../components/Register/index";
import * as action from '../../actions/register/index';

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