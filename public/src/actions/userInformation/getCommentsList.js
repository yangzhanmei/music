import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';
import axios from 'axios';

const getCommentsListAction = (data) => {

    return {
        type: "GETCOMMENTSLIST",
        data
    }
};

const getCommentsList = (params) => {

    return dispatch => {
        (async () => {
            const res = await request.get(`${url}/comment/${params}`);

            if (res.status === StatusCode.OK) {
                dispatch(getCommentsListAction(res.body));
            }
        })()
    }
};

const deleteComment = (params) => {

    const {userId, id} = params;

    return dispatch => {
        (async () => {
            axios({
                method: 'delete',
                url: `${url}/comment/${id}`,
            }).then(function (res) {
                if (res.status === StatusCode.NO_CONTENT) {
                    dispatch(getCommentsList(userId));
                }
            });
        })()
    }
};

module.exports = {
    getCommentsList,
    deleteComment
};