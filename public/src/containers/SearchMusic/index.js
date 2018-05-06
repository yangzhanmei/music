import {connect} from "react-redux";
import SearchMusic from "../../components/SearchMusic/index";
import * as action from '../../actions/searchMusic/getMusic';

const mapStateToProps = (state) => {

    return {
        data: state.SearchMusic
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