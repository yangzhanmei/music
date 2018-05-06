import {connect} from "react-redux";
import HomePage from "../../components/HomePage";
import * as actionCollectMusic from '../../actions/operateMusic/collectMusic';
import * as actionUnCollectMusic from '../../actions/operateMusic/unCollectMusic';
import * as actionGetMusicList from '../../actions/operateMusic/getMusicList';

const mapStateToProps = (state) => {

    return {
        data: state.Homepage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        collectMusic: (obj, callback) => {
            dispatch(actionCollectMusic.collectMusic(obj, callback))
        },
        unCollectMusic: (id, callback) => {
            dispatch(actionUnCollectMusic.unCollectMusic(id, callback))
        },
        getMusicList: (id, callback) => {
            dispatch(actionGetMusicList.getMusicList(id, callback))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);