describe('Get Test Endpoints', () => {
    it('should book a spot ', async () => {
      const res = await request(app)
        .get('/coach/test')

      expect(res.statusCode).toEqual(200)
      expect(true).toEqual(true)
    })
  })
