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
  
    test("Test para crear un usuario en la base de datos", async () => {
        const user = {
            name: "Prueba1",
            username: "Oceanauta1",
            email: "test@te1st.com",
            password: "prueba",
            role: ["admin"]
        };
        const User = services.User;

        const response = await User.createUser(user);
        expect(response).toStrictEqual({"message": "User was registered successfully!"});
            
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

        const response = await User.signin(user);
        expect(response.auth).toBe(true);         
    });


    test("Test para devolver un todos los usuarios de la base de datos", async () => {
        const User = services.User;
        const response = await User.findAll();
        expect(response[0].name).toBe("Prueba");         
        expect(response[1].name).toBe("Prueba1");         
    });

    
});