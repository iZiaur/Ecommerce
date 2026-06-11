const mongoose = require("mongoose");
require("dotenv").config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const Admin = mongoose.model("Admin", {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

async function seed() {
    await mongoose.connect(
        `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0.fjpmheu.mongodb.net/Ecommerce`
    );
    console.log("Connected to MongoDB");

    const existing = await Admin.findOne({ email: "iziaurofficial@gmail.com" });
    if (existing) {
        console.log("Admin account already exists");
    } else {
        await Admin.create({
            email: "iziaurofficial@gmail.com",
            password: "123456"
        });
        console.log("Admin account created");
    }

    await mongoose.disconnect();
    console.log("Done");
}

seed();
