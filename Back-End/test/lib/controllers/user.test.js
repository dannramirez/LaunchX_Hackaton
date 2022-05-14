require("dotenv").config(); // this is important!
const db = require("../../../lib/relations");
const config = require("../../utils/configTest");

const user = {
    name: "Prueba1",
    username: "Oceanauta1",
    email: "test@te1st.com",
    password: "prueba",
    role: ["admin"]
};


describe("Test para userController", () => {
    test("Test para crear un usuario en la base de datos", async () => {
        let services;
        if (!services) {
            try {
                services = await db(config.db);
            } catch (e) {
                console.log(e);
            }
        }

        const User = services.User;

        try {
            const response = await User.createUser(user);
            expect(response).toStrictEqual({"message": "User was registered successfully!"});
            
        } catch (e) {
            console.log(e);
            return e;
        }
    });
});