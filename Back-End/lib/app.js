require("dotenv").config(); // this is important!
const express = require("express");
const asyncify = require("express-asyncify");
const app = asyncify(express());

const db = require("./relations");
const config = require("./utils/config");
let services, User, Report, Donation, Volunteer;


app.use(express.json());
app.use("*", async(req, res, next) => {
    if (!services) {
        try {
            services = await db(config.db);
        } catch (e) {
            return next(e);
        }

        User=services.User;
        Report=services.Report;
        Donation=services.Donation;
        Volunteer=services.Volunteer;
    }
    next();
});


const port = 3000;

app.get("/api/", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.post("/api/register", async (request, response) => {
    const res = await User.createUser(request.body);
    response.status(200).json(res);   
});

app.post("/api/login", async (request, response) => {
    const res = await User.signin(request.body);
    response.status(200).json(res);   
});


app.get("/api/usuarios", async (request, response) => {
    const res = await User.findAll();
    response.status(200).json(res);   
});

app.get("/api/organizaciones/", async (request, response) => {
    const res = await User.findAllOrganizations();
    response.status(200).json(res);   
});

app.get("/api/usuarios/:id", async (request, response) => {
    const id = request.params.id;
    const usuario = await User.findById(id);
    response.status(200).json(usuario);   
});

app.post("/api/reportes", async (request, response) => {
    console.log(request.body);
    const responseReport = await Report.createReport(request.body);
    response.status(200).json(responseReport);   
});

app.get("/api/reportes", async (request, response) => {
    const res = await Report.findAll();
    response.status(200).json(res);   
});

app.get("/api/reportes/:id", async (request, response) => {
    const reporte = await Report.findById(request.params.id);
    response.status(200).json(reporte);   

});

app.get("/api/usuarios/donaciones/id", async (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/usuarios/voluntario/id", async (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.put("/api/usuarios/id", async (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.delete("/api/usuarios/id", async (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});


app.get("/api/donaciones", async (request, response) => {

    response.json({
        mesage: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/donaciones/id", async (request, response) => {

    response.json({
        messge: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/donaciones/reporte/id", async (request, response) => {

    response.json({
        messae: "Oceanautas API -- Hackathon"
    });
});

app.post("/api/donaciones", async (request, response) => {

    response.json({
        messag: "Oceanautas API -- Hackathon"
    });
});

app.put("/api/donaciones/id", async (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.delete("/api/donaciones/id", async (request, response) => {

    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.get("/api/voluntarios", async (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.post("/api/voluntarios", async (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.put("/api/voluntarios/id", async (request, response) => {
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