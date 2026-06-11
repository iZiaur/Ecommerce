const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

// Mongoose Models
const Users = mongoose.model("Users", {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    cartData: { type: Object },
    Date: { type: Date, default: Date.now() }
});

const Admin = mongoose.model("Admin", {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

async function migratePasswords() {
    try {
        await mongoose.connect(
            `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0.fjpmheu.mongodb.net/Ecommerce`
        );
        console.log("Connected to MongoDB for Password Migration.");

        // Migrate Users
        const users = await Users.find({});
        console.log(`Found ${users.length} users to migrate.`);
        for (let user of users) {
            // Check if already hashed (bcrypt hashes start with $2b$ or $2a$)
            if (!user.password.startsWith("$2b$") && !user.password.startsWith("$2a$")) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(user.password, salt);
                await Users.findOneAndUpdate({ _id: user._id }, { password: hashedPassword });
                console.log(`Migrated user password for: ${user.email}`);
            } else {
                console.log(`User ${user.email} already has a hashed password. Skipping.`);
            }
        }

        // Migrate Admin
        const admins = await Admin.find({});
        console.log(`Found ${admins.length} admins to migrate.`);
        for (let admin of admins) {
            if (!admin.password.startsWith("$2b$") && !admin.password.startsWith("$2a$")) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(admin.password, salt);
                await Admin.findOneAndUpdate({ _id: admin._id }, { password: hashedPassword });
                console.log(`Migrated admin password for: ${admin.email}`);
            } else {
                console.log(`Admin ${admin.email} already has a hashed password. Skipping.`);
            }
        }

        console.log("Password Migration Complete!");
    } catch (err) {
        console.error("Migration Error:", err);
    } finally {
        await mongoose.disconnect();
    }
}

migratePasswords();
