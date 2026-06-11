/**
 * One-time migration script: uploads all local product images to Cloudinary
 * and updates their URLs in MongoDB.
 * 
 * Usage: node migrate-images.js
 * 
 * Requires a .env file in the backend directory with:
 *   MONGO_USERNAME, MONGO_PASSWORD,
 *   CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 */

const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const path = require("path");
const fs = require("fs");
require("dotenv").config();

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MongoDB connect
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const Product = mongoose.model(" Product", {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
    available: { type: Boolean, default: true },
});

async function migrate() {
    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(
        `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0.fjpmheu.mongodb.net/Ecommerce`
    );
    console.log("✅ Connected to MongoDB\n");

    const products = await Product.find({});
    console.log(`📦 Found ${products.length} products to migrate\n`);

    let success = 0;
    let skipped = 0;
    let failed = 0;

    for (const product of products) {
        // Skip if already a Cloudinary URL
        if (product.image.includes("cloudinary.com")) {
            console.log(`⏭️  [${product.id}] "${product.name}" — already on Cloudinary, skipping`);
            skipped++;
            continue;
        }

        // Extract filename from the old localhost URL
        // e.g. "http://localhost:4000/images/product_1781101937744_.png" → "product_1781101937744_.png"
        const filename = product.image.split("/").pop();
        const localPath = path.join(__dirname, "upload", "images", filename);

        if (!fs.existsSync(localPath)) {
            console.log(`❌ [${product.id}] "${product.name}" — local file not found: ${filename}`);
            failed++;
            continue;
        }

        try {
            console.log(`⬆️  [${product.id}] Uploading "${filename}"...`);
            const result = await cloudinary.uploader.upload(localPath, {
                folder: "ecommerce_products",
                resource_type: "image",
                public_id: path.parse(filename).name, // keep original name without extension
            });

            await Product.findOneAndUpdate(
                { id: product.id },
                { image: result.secure_url }
            );

            console.log(`✅ [${product.id}] "${product.name}" → ${result.secure_url}`);
            success++;
        } catch (error) {
            console.log(`❌ [${product.id}] "${product.name}" — upload failed: ${error.message}`);
            failed++;
        }
    }

    console.log("\n========== MIGRATION COMPLETE ==========");
    console.log(`✅ Success: ${success}`);
    console.log(`⏭️  Skipped: ${skipped}`);
    console.log(`❌ Failed:  ${failed}`);
    console.log("=========================================\n");

    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
}

migrate().catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
});
