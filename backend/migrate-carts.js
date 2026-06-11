const mongoose = require("mongoose");
require("dotenv").config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const Users = mongoose.model("Users", {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    cartData: { type: Object },
    Date: { type: Date, default: Date.now() }
});

async function migrate() {
    await mongoose.connect(
        `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0.fjpmheu.mongodb.net/Ecommerce`
    );
    console.log("Connected to MongoDB");

    const users = await Users.find({});
    console.log(`Found ${users.length} users to migrate.`);

    for (let user of users) {
        let oldCart = user.cartData || {};
        let newCart = {};

        // Loop over existing keys
        for (let key in oldCart) {
            // Check if the old key has quantity > 0
            if (oldCart[key] > 0) {
                // If it already has an underscore, it might have been migrated, but we assume it hasn't
                let newKey = key.includes('_') ? key : `${key}_M`;
                newCart[newKey] = oldCart[key];
            }
        }

        // Save back the cleaned and migrated cart
        await Users.findOneAndUpdate({ _id: user._id }, { cartData: newCart });
        console.log(`Migrated user ${user.email}`);
    }

    await mongoose.disconnect();
    console.log("Migration complete!");
}

migrate();
