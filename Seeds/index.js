const sequelize = require('../config/connection');
const seedComment = require('./commentseeds');
const seedUser = require('./userseeds');
const seedPost = require('./postseeds');


const seedData = async () => {
    try {
        await sequelize.sync({ force: true });
        await seedUser();
        await seedPost();
        await seedComment();
        console.log('Seeding complete');
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
}
seedData (); 