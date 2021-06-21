const request = require('supertest')
const app = require('../server')

describe('Post Endpoints', () => {
  it('should book a spot ', async () => {
    const res = await request(app)
      .post('/coach/book')
      .send({
        name: 'John Doe',
        from: '9:30:00',
        to: '14:30:00'
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.message).toEqual("spot booked")
  })
})

describe('Get Endpoints', () => {
    it('fetch list of distinct coaches  ', async () => {
      const res = await request(app)
        .get('/coach/')

      expect(res.statusCode).toEqual(200)
      expect(res.body[1].name).toEqual("Jane Doe")
    })
  })

  describe('Get Endpoints', () => {
    it('get available slots ', async () => {
      const res = await request(app)
        .get('/coach/avaslots/john Doe')

      expect(res.statusCode).toEqual(200)
      expect(res.body[1].slotnumbers).toEqual("16.0000")
    })
  })