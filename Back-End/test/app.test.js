const supertest = require("supertest");
const { app, server } = require("../lib/app.js");

const request = supertest(app);

afterAll(() => {
    server.close();
});

describe("Test endpoint responses", () => {

    test("gets the / endpoint", async () => {
        const response = await request.get("/api/");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            "message": "Oceanautas API -- Hackathon"
        });
    });

});