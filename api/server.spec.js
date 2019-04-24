const server = require('./server.js'); 
const request = require('supertest'); 


describe('GET /', () => {
    it('should return 200 ok', () => {
       return request(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200)
        }) 
    }) 

    it('should return text/html', async () => {
        const res = await request(server).get('/') 

        expect(res.type).toBe('text/html')
    }) 

})
