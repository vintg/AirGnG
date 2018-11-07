const request = require('supertest');
const { app } = require('../server/index');

describe('server / reviews', () => {

  it('should return a result for a valid request', () => {
    // request(app).get('/api/reviews')
    // .then(res => expect(res.statusCode).to.equal(200));
  });

  it('should return an array of json objects for a {} get', () => {
    // request(app).get('/api/reviews')
    // .then(res => {
    //   expect(Array.isArray(res)).toBe(true);
    //   expect(typeof res[0]).toBe('object');
    // });
  });

  it('should return filtered results for a {query} get', () => {
    // var query = {reviewText:"query"};

    // request(app).get('/api/reviews', query)
    //   .then(res => {
    //     expect(res.statusCode).to.equal(200);
    //     expect(res.header['content-type']).to.equal('text/html');
    //   });
  });

  it('should return empty results for a query mismatch for all records', () => {
    // request(app).get('/api/reviews', 'basdalama')
    //   .then(res => {
    //     expect(res).to.equal([]);
    //   });
  });

});