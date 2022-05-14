require("dotenv").config(); // this is important!
const db = require("../../../lib/relations");
const config = require("../../utils/configTest");

let services;

beforeAll(async () => {
    if (!services) {
        try {
            services = await db(config.db);
        } catch (e) {
            console.log(e);
        }
    }   
});

describe("Test para userController", () => {
    const user = {
        name: "Prueba1",
        username: "Oceanauta1",
        email: "test@te1st.com",
        password: "prueba",
        role: ["admin"]
    };

    test("Test para crear un usuario en la base de datos", async () => {
       
        const User = services.User;

        try {
            const response = await User.createUser(user);
            expect(response).toStrictEqual({"message": "User was registered successfully!"});
            
        } catch (e) {
            console.log(e);
            return e;
        }
    });

    test("Test para crear Iniciar Sesión con la base de datos", async () => {
        const user = {
            name: "Prueba1",
            username: "Oceanauta1",
            email: "test@te1st.com",
            password: "prueba",
            role: ["admin"]
        };

        const User = services.User;

        try {
            const response = await User.signin(user);
            expect(response.auth).toBe(true);         
        } catch (e) {
            console.log(e);
            return e;
        }
    });
});