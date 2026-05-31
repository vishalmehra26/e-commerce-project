const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const MONGO_URI = 'mongodb://localhost:27017/cloth_shop';

const seedDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected for seeding...');

        // Read JSON files
        const productsFile = path.join(__dirname, '..', 'cloth_shop_products.json');
        const usersFile = path.join(__dirname, '..', 'furniture_shop.users.json');

        // Seed products
        const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));
        const productsCollection = mongoose.connection.collection('products');
        
        // Convert $oid and $date fields to proper MongoDB types
        const products = productsData.map(p => {
            const product = { ...p };
            if (product._id && product._id.$oid) product._id = new mongoose.Types.ObjectId(product._id.$oid);
            if (product.user && product.user.$oid) product.user = new mongoose.Types.ObjectId(product.user.$oid);
            if (product.createdAt && product.createdAt.$date) product.createdAt = new Date(product.createdAt.$date);
            if (product.specifications) {
                product.specifications = product.specifications.map(s => {
                    if (s._id && s._id.$oid) s._id = new mongoose.Types.ObjectId(s._id.$oid);
                    return s;
                });
            }
            if (product.images) {
                product.images = product.images.map(img => {
                    if (img._id && img._id.$oid) img._id = new mongoose.Types.ObjectId(img._id.$oid);
                    return img;
                });
            }
            return product;
        });

        await productsCollection.deleteMany({});
        await productsCollection.insertMany(products);
        console.log(`Seeded ${products.length} products`);

        // Seed users
        if (fs.existsSync(usersFile)) {
            const usersData = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
            const usersCollection = mongoose.connection.collection('users');
            
            const users = [];
            for (const u of usersData) {
                const user = { ...u };
                if (user._id && user._id.$oid) user._id = new mongoose.Types.ObjectId(user._id.$oid);
                if (user.createdAt && user.createdAt.$date) user.createdAt = new Date(user.createdAt.$date);
                // Hash plainPassword and store as password
                if (user.plainPassword) {
                    user.password = await bcrypt.hash(user.plainPassword, 10);
                    delete user.plainPassword;
                }
                users.push(user);
            }

            await usersCollection.deleteMany({});
            await usersCollection.insertMany(users);
            console.log(`Seeded ${users.length} users`);
        }

        console.log('Seeding complete!');
        process.exit(0);
    } catch (err) {
        console.error('Seeding error:', err);
        process.exit(1);
    }
};

seedDB();
