import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';
import axios from 'axios';

const getMusicListAction = (data) => {

    return {
        type: "GETMUSICLIST",
        data
    }
};

const getMusicList = (id) => {

    return dispatch => {
        (async () => {
            const res = await request.get(`${url}/music/recommend/${id}`);

            if (res.status === StatusCode.OK) {
                dispatch(getMusicListAction(res.body));
            }
        })();
    }
};

const collectMusic = (params) => {
    const {userId} = params;

    return dispatch => {
        (async () => {
            const res = await request.post(`${url}/collection`, params);

            if (res.status === StatusCode.CREATED) {
                dispatch(getMusicList(userId));
            }
        })();
    }
};

const unCollectMusic = (params) => {
    const {userId, musicId} = params;

    return dispatch => {
        (async () => {
            axios({
                method: 'delete',
                url: `${url}/collection/undo?userId=${userId}&musicId=${musicId}`,
            }).then(function (res) {
                if (res.status === StatusCode.NO_CONTENT) {
                    dispatch(getMusicList(userId));
                }
            });
        })();
    }
};

module.exports = {
    getMusicList,
    collectMusic,
    unCollectMusic
};