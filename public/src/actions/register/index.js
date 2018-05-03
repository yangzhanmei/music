import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';

const registerAction = (isSuccess) => {

    return {
        type: "REGISTER",
        isSuccess
    }
};

const register = (obj, callback) => {

    return dispatch => {
        (async () => {
            const res = await request.post(`${url}/user`, obj);

            if (res.status === StatusCode.CREATED) {
                dispatch(registerAction(res.body));
                callback();
            }
        })()
    }
};

module.exports = {
    registerAction,
    register
};