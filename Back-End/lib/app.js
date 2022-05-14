const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

app.get("/api/", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.post("/api/", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.post("/api/login", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/register", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/usuarios", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/organizaciones/", (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/usuarios/id", (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/usuarios/donaciones/id", (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/usuarios/voluntario/id", (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.put("/api/usuarios/id", (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.delete("/api/usuarios/id", (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/reportes", (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/reportes/id", (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.post("/api/reportes", (request, response) => {

    response.json({
        essage: "Oceanautas API -- Hackathon"
    });
});

app.put("/api/reportes/id", (request, response) => {

    response.json({
        mssage: "Oceanautas API -- Hackathon"
    });
});

app.delete("/api/reportes/id", (request, response) => {

    response.json({
        mesage: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/donaciones", (request, response) => {

    response.json({
        mesage: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/donaciones/id", (request, response) => {

    response.json({
        messge: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/donaciones/reporte/id", (request, response) => {

    response.json({
        messae: "Oceanautas API -- Hackathon"
    });
});

app.post("/api/donaciones", (request, response) => {

    response.json({
        messag: "Oceanautas API -- Hackathon"
    });
});

app.put("/api/donaciones/id", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.delete("/api/donaciones/id", (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/voluntarios", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.post("/api/voluntarios", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.put("/api/voluntarios/id", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

const server = app.listen(port, () => {
    console.log(`Server is Listening on ${port}`);
});

module.exports = {
    app,
    server
};