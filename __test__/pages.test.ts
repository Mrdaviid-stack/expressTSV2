import request from "supertest";

describe("GET /pages", () => {
    test("should return all pages", async () => {
           const response = await request('http://localhost:3000').get('/pages')
           expect(response.statusCode).toEqual(200);
    })
})

