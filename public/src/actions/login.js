import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';

const loginAction = (information) => {

    return {
        type: "LOGIN",
        information
    }
};

const login = (obj, callback) => {

    return dispatch => {
        (async () => {
            const res = await request.get(`http://192.168.10.151:8080/user/name/${obj.userName}/pass/${obj.password}`);

            if (res.status === StatusCode.OK) {
                dispatch(loginAction(res.body));
                callback();
            }
        })()
    }
};

module.exports = {
    loginAction,
    login
};