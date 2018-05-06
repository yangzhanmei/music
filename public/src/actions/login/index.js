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
            const res = await request.get(`${url}/user?username=${obj.userName}&password=${obj.password}`);

            if (res.status === StatusCode.OK) {
                dispatch(loginAction(res.body));
                callback();
            }
        })()
    }
};

module.exports = {
    login
};