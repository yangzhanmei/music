import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';
import axios from 'axios';

const getMusicAction = (data) => {

    return {
        type: "GETMUSICLIST",
        data
    }
};

const getMusicList = (params) => {

    return dispatch => {
        (async () => {
            const res = await request.get(`${url}/collection/${params}`);

            if (res.status === StatusCode.OK) {
                dispatch(getMusicAction(res.body));
            }
        })()
    }
};

const deleteMusic = (params) => {

    const {userId, id} = params;

    return dispatch => {
        (async () => {
            axios({
                method: 'delete',
                url: `${url}/collection/${id}`,
            }).then(function (res) {
                if (res.status === StatusCode.NO_CONTENT) {
                    dispatch(getMusicList(userId));
                }
            });
        })()
    }
};

module.exports = {
    getMusicList,
    deleteMusic
};