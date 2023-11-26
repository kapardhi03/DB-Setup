// testCRUD.js
const { sequelize, Users } = require("./models");

// C - CREATE
async function createRecords() {
    try {
        const newUser = await Users.create({
            username: "Kapardhi",
            email: "kapardhi@gmail.com",
            display_name: "Kaps",
            bio: "All-Rounder",
            date_of_birth: new Date(),
            created_at: new Date(),
            // plus_verified: ""
        });

        console.log("User created:", newUser.toJSON());
    } catch (error) {
        console.error("Error creating user:", error);
    } finally {
        // Close the database connection
        await sequelize.close();
    }
}

// Call the function to create records
createRecords();