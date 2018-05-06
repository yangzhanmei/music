import {connect} from "react-redux";
import MusicInformation from "../../components/MusicInformation";
import * as action from '../../actions/musicInformation';

const mapStateToProps = (state) => {

    return {
        data: state.MusicInformation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMusicInformation: (id) => {
            dispatch(action.getMusicInformation(id))
        },
        commentMusic: (params, callback) => {
            dispatch(action.getMusicInformation(params, callback))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicInformation);