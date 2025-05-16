const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../server'); // make sure this path is correct

describe('POST /api/convert', () => {
  it('should convert valid input to uppercase', async () => {
    const res = await request(app).post('/api/convert').send({ input: 'hello' });
    expect(res.status).to.equal(200);
    expect(res.body.result).to.equal('HELLO');
  });

  it('should return 400 for missing input', async () => {
    const res = await request(app).post('/api/convert').send({});
    expect(res.status).to.equal(400);
    expect(res.body.error).to.exist;
  });

  it('should return 400 for non-string input', async () => {
    const res = await request(app).post('/api/convert').send({ input: 123 });
    expect(res.status).to.equal(400);
    expect(res.body.error).to.exist;
  });

  it('should return 500 for forced error input', async () => {
    const res = await request(app).post('/api/convert').send({ input: 'error' });
    expect(res.status).to.equal(500);
    expect(res.body.error).to.equal('Forced error');
  });
});
