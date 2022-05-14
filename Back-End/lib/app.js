const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

app.get("/api/", (request, response) => {
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