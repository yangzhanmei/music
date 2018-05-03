import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';

const unCollectMusicAction = (data) => {

    return {
        type: "UNCOLLECTMUSIC",
        data
    }
};

const unCollectMusic = (id, callback) => {

    return dispatch => {
        (async () => {
            const res = await request.del(`${url}/api/collection/${id}`);
            console.log(res);
            if (res.status === StatusCode.OK) {
                dispatch(unCollectMusicAction(res.body));
                callback();
            }
        })();
    }
};

module.exports = {
    unCollectMusic
};