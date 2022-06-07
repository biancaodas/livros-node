import mongoose from "mongoose"

mongoose.connect("mongodb+srv://BiancaOdas:1234@project.mtqavp9.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;

