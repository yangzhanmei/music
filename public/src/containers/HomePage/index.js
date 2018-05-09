import {connect} from "react-redux";
import HomePage from "../../components/HomePage";
import * as action from '../../actions/operateMusic';

const mapStateToProps = (state) => {

    return {
        data: state.HomePage
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        collectMusic: (params) => {
            dispatch(action.collectMusic(params))
        },
        unCollectMusic: (params) => {
            dispatch(action.unCollectMusic(params))
        },
        getMusicList: (params) => {
            dispatch(action.getMusicList(params))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);