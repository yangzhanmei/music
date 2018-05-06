import {connect} from "react-redux";
import UserCommentsList from "../../components/UserInformation/CommentsList";
import * as action from '../../actions/userInformation/getCommentsList';

const mapStateToProps = (state) => {

    return {
        data: state.UserCommentsList
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        getCommentsList: (params) => {
            dispatch(action.getCommentsList(params))
        },
        deleteComment: (params) => {
            dispatch(action.deleteComment(params))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCommentsList)