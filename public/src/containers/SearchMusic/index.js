import {connect} from "react-redux";
import SearchMusic from "../../components/SearchMusic";
import * as action from '../../actions/searchMusic/getMusic';

const mapStateToProps = (state) => {

    return {
        musicList: state.SearchMusic
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        getMusicList: (text, callback) => {
            dispatch(action.getMusicList(text, callback))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMusic)