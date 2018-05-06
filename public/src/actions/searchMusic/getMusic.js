import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';

const getMusicAction = (musicList) => {

    return {
        type: "GETMUSIC",
        musicList
    }
};

const getMusicList = (obj, callback) => {
    const {text} = obj;

    return dispatch => {
        (async () => {
            const res = await request.get(`${url}/music?musicName=${text}`);

            if (res.status === StatusCode.OK) {
                dispatch(getMusicAction(res.body));
                callback();
            }
        })()
    }
};

module.exports = {
    getMusicAction,
    getMusicList,
};