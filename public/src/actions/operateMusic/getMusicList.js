import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';

const getMusicListAction = (data) => {

    return {
        type: "GETMUSICLIST",
        data
    }
};

const getMusicList = (obj, callback) => {

    return dispatch => {
        (async () => {
            const res = await request.post(`${url}/collection`,obj);
            console.log(res);
            if (res.status === StatusCode.CREATED) {
                dispatch(getMusicListAction(res.body));
                callback();
            }
        })();
    }
};

module.exports = {
    getMusicList
};