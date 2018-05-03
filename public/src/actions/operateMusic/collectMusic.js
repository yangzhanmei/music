import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';

const collectMusicAction = (data) => {

    return {
        type: "COLLECTMUSIC",
        data
    }
};

const collectMusic = (obj, callback) => {

    return dispatch => {
        (async () => {
            const res = await request.post(`${url}/api/collection`,obj);
            console.log(res);
            if (res.status === StatusCode.OK) {
                dispatch(collectMusicAction(res.body));
                callback();
            }
        })();
    }
};

module.exports = {
    collectMusic
};