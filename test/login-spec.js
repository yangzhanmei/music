const request = require('supertest');
import url from '../public/src/common/url';

describe('login', () => {

    it('login success', function (done) {

        const userName = '';
        const password = '';

        request.get(`${url}/user?username=${userName}&password=${password}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});