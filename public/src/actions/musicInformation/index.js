import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';
import axios from 'axios';

const getMusicInformationAction = (data) => {

    return {
        type: "GETMUSICINFORMATION",
        data
    }
};

const getMusicInformation = (id) => {

    return dispatch => {
        (async () => {
            const res = await request.get(`${url}/music/${id}`);
            console.log(res);
            if (res.status === StatusCode.OK) {
                dispatch(getMusicInformationAction(res.body));
            }
        })()
    }
};

const commentMusic = (params) => {

    const {musicId} = params;

    return dispatch => {
        (async () => {
            const res = await request.post(`${url}/comment`, params);

            if (res.status === StatusCode.CREATED) {
                dispatch(getMusicInformation(musicId));
            }
        })()
    }
};

const unGiveLike = (params) => {

    const {id, musicId} = params;

    return dispatch => {
        (async () => {
            axios({
                method: 'put',
                url: `${url}/comment/undo?id=${id}`,
            }).then(function (res) {
                if (res.status === StatusCode.OK) {
                    dispatch(getMusicInformation(musicId));
                }
            });
        })()
    }
};

const giveLike = (params) => {

    const {id, musicId} = params;

    return dispatch => {
        (async () => {
            axios({
                method: 'put',
                url: `${url}/comment?id=${id}`,
            }).then(function (res) {
                if (res.status === StatusCode.OK) {
                    dispatch(getMusicInformation(musicId));
                }
            });
        })()
    }
};

module.exports = {
    getMusicInformation,
    commentMusic,
    giveLike,
    unGiveLike
};