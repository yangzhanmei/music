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
            dispatch(action.getMusicInformation(id));
        },
        commentMusic: (params) => {
            dispatch(action.commentMusic(params));
        },
        giveLike: (params) => {
            dispatch(action.giveLike(params));
        },
        unGiveLike: (params) => {
            dispatch(action.unGiveLike(params));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicInformation);