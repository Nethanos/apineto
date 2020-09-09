const request = require('supertest');
const app = require('../../src/app');

const requestApiEndpoint = (queryParams) => {
    return request(app).get('/v1/infection-calculator').query(queryParams);
}

test('Response should be a valid string number', async () => {
    const queryParams = {
        age: 50,
        genre: 'fem',
        hasPreviousDesease: false,
        isFollowingOMSRule: false
    }
    const response = await requestApiEndpoint(queryParams);
    expect(response.body).toEqual(expect.stringMatching(/[0-9]+/));
})


test('Result of calculation should be 13 percent with OMS rule', async () => {

    const queryParams = {
        age: 18,
        genre: 'masc',
        hasPreviousDesease: false,
        isFollowingOMSRule: true
    }

    const response = await requestApiEndpoint(queryParams);
    expect(response.body).toBe("13.00");
    expect(response.status).toBe(200);
});

test('Result of calculation should be 28 percent without OMS rule', async () => {

    const queryParams = {
        age: 18,
        genre: 'masc',
        hasPreviousDesease: false,
    }

    const response = await requestApiEndpoint(queryParams);
    expect(response.body).toBe("28.00");
    expect(response.status).toBe(200);
});

