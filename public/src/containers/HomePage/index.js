import {connect} from "react-redux";
import HomePage from "../../components/HomePage";
import * as actionCollectMusic from '../../actions/operateMusic/collectMusic';

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
            dispatch(actionCollectMusic.unCollectMusic(id, callback))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);