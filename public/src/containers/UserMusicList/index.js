import {connect} from "react-redux";
import UserMusicList from "../../components/UserInformation/MusicList";
import * as action from '../../actions/userInformation/getMusicList';

const mapStateToProps = (state) => {

    return {
        data: state.UserMusicList
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        getMusicList: (params, callback) => {
            dispatch(action.getMusicList(params, callback))
        },
        deleteMusic: (params, callback) => {
            dispatch(action.deleteMusic(params, callback))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMusicList)