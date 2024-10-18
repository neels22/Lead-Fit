

/// write a fucntion to create a users table in your database

import { Client } from "pg";


// connect to the database
const client = new Client({
    connectionString:"postgresql://practice-db_owner:v7JlIHD2Kctm@ep-sweet-fire-a87bng87.eastus2.azure.neon.tech/practice-db?sslmode=require"

})


async function createUsersTable() {


    await client.connect()

    /// create table code 
    try {
        const result = await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL
            );
        `);
        console.log("Table created successfully:", result);
    } catch (error) {
        console.error("Error creating table:", error);
    }finally {
        await client.end();  // Ensure the client connection is closed
    }
}

// createUsersTable();

async function InsertIntoUsers() {
    await client.connect();

    try {
        const result = await client.query(`
            INSERT INTO users(username) VALUES ('neelay');
        `);
        console.log("Data inserted successfully:", result);
    } catch (error) {
        console.error("Error inserting into table:", error);
    }finally {
        await client.end();  // Ensure the client connection is closed
    }
}
// InsertIntoUsers();





// Update function to change the username by ID
async function updateUsername(id:number, newUsername:string) {
    await client.connect();

    try {
        const result = await client.query(
            `UPDATE users SET username = $1 WHERE id = $2`,
            [newUsername, id]
        );
        console.log(`User with ID ${id} updated to ${newUsername}:`, result);
    } catch (error) {
        console.error(`Error updating user with ID ${id}:`, error);
    } finally {
        await client.end();  // Ensure the client connection is closed
    }
}

// Delete function to remove a user by ID
async function deleteUser(id:number) {
    await client.connect();

    try {
        const result = await client.query(
            `DELETE FROM users WHERE id = $1`,
            [id]
        );
        console.log(`User with ID ${id} deleted successfully:`, result);
    } catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error);
    } finally {
        await client.end();  // Ensure the client connection is closed
    }
}

// // Example usage
// updateUsername(1, 'newNeel'); // Update user with id 1
// deleteUser(1); // Delete user with id 1



// Get user by ID function
async function getUserById(id:number) {
    await client.connect();

    try {
        const result = await client.query(
            `SELECT * FROM users WHERE id = $1`,  // Parameterized query
            [id]  // Passing id as parameter
        );
        if (result.rows.length > 0) {
            console.log(`User with ID ${id}:`, result.rows[0]);  // Logs the user data
        } else {
            console.log(`No user found with ID ${id}`);
        }
    } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
    } finally {
        await client.end();  // Ensure the client connection is closed
    }
}

// Example usage
getUserById(3);  // Fetch user with id 1
