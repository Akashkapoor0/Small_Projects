// const mongoose = require("mongoose");
// const Chat = require("./models/chat.js");

// let allChats = [
//     {
//         from: "Neha",
//         to: "Priya",
//         msg: "Give me Your Notebook",
//         created_at: new Date(),
//     },
//     {
//         from: "Priya",
//         to: "Neha",
//         msg: "Okay, I'll bring it tomorrow.",
//         created_at: new Date(),
//     },
//     {
//         from: "Ankit",
//         to: "Ravi",
//         msg: "Do you have any updates on the project?",
//         created_at: new Date(),
//     },
//     {
//         from: "Ravi",
//         to: "Ankit",
//         msg: "Yes, I completed the initial draft of the report.",
//         created_at: new Date(),
//     },
//     {
//         from: "Akash",
//         to: "Anuj",
//         msg: "Let’s meet up tomorrow for lunch.",
//         created_at: new Date(),
//     },
//     {
//         from: "Anuj",
//         to: "Akash",
//         msg: "Sounds good, where?",
//         created_at: new Date(),
//     },
//     {
//         from: "John",
//         to: "Doe",
//         msg: "I need the report by the end of the day.",
//         created_at: new Date(),
//     },
//     {
//         from: "Doe",
//         to: "John",
//         msg: "Got it, I’ll send it over shortly.",
//         created_at: new Date(),
//     }
// ];

// Chat.insertMany(allChats)
//     .then(() => {
//         console.log("Chats inserted successfully.");
//     })
//     .catch((err) => {
//         console.log("Error inserting chats:", err);
//     });

// main()
//     .then(() => {
//         console.log("Connection successful");
//     })
//     .catch((err) => {
//         console.log("Error connecting to MongoDB:", err);
//     });

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
// }
