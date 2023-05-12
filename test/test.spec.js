const app = require('../index'); 
const request = require('supertest'); 
const {expect} = require('chai'); 


describe('GET /',()=>{
    it('should return Hello World',async()=>{
        const respond = await request(app).get('/'); 
        expect(respond.statusCode).equals(200); 
        expect(respond.text).equals('Hello World')
    })
})