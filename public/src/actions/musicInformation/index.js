import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';

const getMusicInformationAction = (data) => {

    return {
        type: "GETMUSICINFORMATION",
        data
    }
};

const commentMusicAction = (isSuccess) => {

    return {
        type: "COMMENTMUSIC",
        isSuccess
    }
};

const getMusicInformation = (id) => {

    return dispatch => {
        (async () => {
            const res = await request.get(`${url}/music/${id}`);

            if (res.status === StatusCode.OK) {
                dispatch(getMusicInformationAction(res.body));
            }
        })()
    }
};

const commentMusic = (obj,callback) => {

    return dispatch => {
        (async () => {
            const res = await request.post(`${url}/comment`, obj);
            console.log(res);
            if (res.status === StatusCode.OK) {
                dispatch(commentMusicAction(res.body));
                callback()
            }
        })()
    }
};

module.exports = {
    getMusicInformation,
    commentMusic
};