import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';

const login = (value) => {

    return {
        type: "SHOWHELLO",
        value
    }
};

const getHello = () => {

    return dispatch => {
        request.get("http://192.168.10.151:8080/showHello")
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(login(result.data));
                }
            })
    }
};

module.exports = {
    login,
    getHello
};