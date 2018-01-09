import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';

const getMusicAction = (musicList) => {

    return {
        type: "GETMUSIC",
        musicList
    }
};

const getMusicList = (text, callback) => {

    return dispatch => {
        (async () => {
            // const res = await request.get(`http://192.168.10.151:8080/music/${text}`);
            const res = [
                "于文文 - 体面",
                "冯允澈 - 体面",
                "陈曦 - 体面（Cover 于文文）",
                "简弘亦 - 体面"
            ];
            // if (res.status === StatusCode.OK) {
            dispatch(getMusicAction(res));
            callback();
            // }
        })()
    }
};

module.exports = {
    getMusicAction,
    getMusicList,
};