import * as request from '../../request/request';
import * as StatusCode from '../../constants/StatusCode';
import url from '../../common/url';

const loginAction = (information) => {

    return {
        type: "LOGIN",
        information
    }
};

const login = (obj, callback) => {

    return dispatch => {
        (async () => {
            const res = await request.get(`${url}/user/name/${obj.userName}/pass/${obj.password}`);

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