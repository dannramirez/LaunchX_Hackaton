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

app.get("/", (request, response) => {
    response.json({
        message: "Oceanautas API -- Hackathon"
    });
});

app.post("/register", async (request, response) => {
    const res = await User.createUser(request.body);
    response.status(200).json(res);   
});

app.post("/login", async (request, response) => {
    const res = await User.signin(request.body);
    response.status(200).json(res);   
});


app.get("/usuarios", async (request, response) => {
    const res = await User.findAll();
    response.status(200).json(res);   
});

app.get("/organizaciones/", async (request, response) => {
    const res = await User.findAllOrganizations();
    response.status(200).json(res);   
});

app.get("/usuarios/:id", async (request, response) => {
    const id = request.params.id;
    const usuario = await User.findById(id);
    response.status(200).json(usuario);   
});

app.post("/reportes", async (request, response) => {
    console.log(request.body);
    const responseReport = await Report.createReport(request.body);
    response.status(200).json(responseReport);   
});

app.get("/reportes", async (request, response) => {
    const res = await Report.findAll();
    response.status(200).json(res);   
});

app.get("/reportes/:id", async (request, response) => {
    const reporte = await Report.findById(request.params.id);
    response.status(200).json(reporte);   

});

app.post("/donaciones", async (request, response) => {
    const donativo = await Donation.createDonation(request.body);
    response.status(200).json(donativo);   
});

app.get("/donaciones", async (request, response) => {
    const donativo = await Donation.findAll();
    response.status(200).json(donativo);   
});

app.get("/donaciones/:id", async (request, response) => {
    const donativo = await Donation.findById(request.params.id);
    response.status(200).json(donativo);   
});

app.get("/donaciones/reporte/:id", async (request, response) => {
    const donativo = await Donation.findByReportId(request.params.id);
    response.status(200).json(donativo);   
});

app.get("/usuarios/donaciones/:id", async (request, response) => {
    const donativo = await Donation.findByUserId(request.params.id);
    response.status(200).json(donativo);   
});

app.post("/voluntarios", async (request, response) => {
    const voluntario = await Volunteer.createVolunteer(request.body);
    response.status(200).json(voluntario);   
});

app.get("/voluntarios", async (request, response) => {
    const voluntario = await Volunteer.findAll();
    response.status(200).json(voluntario);   
});

app.get("/usuarios/voluntario/:id", async (request, response) => {
    const voluntario = await Volunteer.findByUserId(request.params.id);
    response.status(200).json(voluntario);   
});

app.get("/usuarios/voluntarios/:id", async (request, response) => {
    const voluntario = await Volunteer.findByReportId(request.params.id);
    response.status(200).json(voluntario);   
});

const server = app.listen(port, () => {
    console.log(`Server is Listening on ${port}`);
});

module.exports = {
    app,
    server
};