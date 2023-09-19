import request from "supertest";

describe("POST /pages/add", () => {
    test("should save page", async () => {
        const data = {
            page_name: 'test123456'
        }
        const response = await request('http://localhost:3000')
            .post("/pages/add")
            .send(data)
            .expect(201)
        expect(response.body.data.page_name).toBe(data.page_name)
    })
})

describe("PATCH /pages/edit/:id", () => {
    test("should update page", async () => {
        const data = {
            page_name: 'test123458A'
        }

        await request('http://localhost:3000').patch('/pages/edit/41')
            .send(data)
            .expect(200)
    })
})

describe("DEL /page/del/:id", () => {
    test("should delete page", async () => {
        await request('http://localhost:3000').delete('/pages/del/1')
            .expect(200)
    })
})

describe("GET /pages", () => {
    test("should return all pages", async () => {
           const response = await request('http://localhost:3000').get('/pages')
           expect(response.statusCode).toEqual(200);
    })
})
