"use strict";
/// write a fucntion to create a users table in your database
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// connect to the database
const client = new pg_1.Client({
    connectionString: "postgresql://practice-db_owner:v7JlIHD2Kctm@ep-sweet-fire-a87bng87.eastus2.azure.neon.tech/practice-db?sslmode=require"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        /// create table code 
        try {
            const result = yield client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL
            );
        `);
            console.log("Table created successfully:", result);
        }
        catch (error) {
            console.error("Error creating table:", error);
        }
        finally {
            yield client.end(); // Ensure the client connection is closed
        }
    });
}
// createUsersTable();
function InsertIntoUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const result = yield client.query(`
            INSERT INTO users(username) VALUES ('neelay');
        `);
            console.log("Data inserted successfully:", result);
        }
        catch (error) {
            console.error("Error inserting into table:", error);
        }
        finally {
            yield client.end(); // Ensure the client connection is closed
        }
    });
}
// InsertIntoUsers();
// Update function to change the username by ID
function updateUsername(id, newUsername) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const result = yield client.query(`UPDATE users SET username = $1 WHERE id = $2`, [newUsername, id]);
            console.log(`User with ID ${id} updated to ${newUsername}:`, result);
        }
        catch (error) {
            console.error(`Error updating user with ID ${id}:`, error);
        }
        finally {
            yield client.end(); // Ensure the client connection is closed
        }
    });
}
// Delete function to remove a user by ID
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const result = yield client.query(`DELETE FROM users WHERE id = $1`, [id]);
            console.log(`User with ID ${id} deleted successfully:`, result);
        }
        catch (error) {
            console.error(`Error deleting user with ID ${id}:`, error);
        }
        finally {
            yield client.end(); // Ensure the client connection is closed
        }
    });
}
// // Example usage
// updateUsername(1, 'newNeel'); // Update user with id 1
// deleteUser(1); // Delete user with id 1
// Get user by ID function
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const result = yield client.query(`SELECT * FROM users WHERE id = $1`, // Parameterized query
            [id] // Passing id as parameter
            );
            if (result.rows.length > 0) {
                console.log(`User with ID ${id}:`, result.rows); // Logs the user data
            }
            else {
                console.log(`No user found with ID ${id}`);
            }
        }
        catch (error) {
            console.error(`Error fetching user with ID ${id}:`, error);
        }
        finally {
            yield client.end(); // Ensure the client connection is closed
        }
    });
}
// Example usage
getUserById(3); // Fetch user with id 1
