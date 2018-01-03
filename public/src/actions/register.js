import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';

const registerAction = (isSuccess) => {

    return {
        type: "REGISTER",
        isSuccess
    }
};

const register = (obj, callback) => {

    return dispatch => {
        (async () => {
            const res = await request.post(`http://192.168.10.151:8080/user`, obj);

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