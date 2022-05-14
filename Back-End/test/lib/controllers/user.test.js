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

    test("Test para crear un usuario en la base de datos", async () => {
        const user1 = {
            name: "Prueba12",
            username: "Oceanauta12",
            email: "test@te12st.com",
            password: "prueba",
            role: ["admin"]
        };
        const user2 = {
            name: "Prueba13",
            username: "Oceanauta13",
            email: "test@te13st.com",
            password: "prueba",
            role: ["organization"]
        };
        const user3 = {
            name: "Prueba14",
            username: "Oceanauta14",
            email: "test@te14st.com",
            password: "prueba",
            role: ["user"]
        };

        const User = services.User;
        await User.createUser(user1);
        await User.createUser(user2);
        await User.createUser(user3);

        expect(1).toBe(1);         
            
    });


    test("Test para devolver un todos los usuarios de la base de datos", async () => {
        const User = services.User;
        const response = await User.findAll();
        console.log(response);
        expect(response[0].name).toBe("Prueba1");         
        expect(response[1].name).toBe("Prueba12");         
    });

    
});