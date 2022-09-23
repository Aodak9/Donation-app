import app from './app.js';
import { sequelize } from './db/db.js';
import './models/Project.js';

async function main() {
    try {
        await sequelize.sync({force: false});
        app.listen(3001)
        console.log('Server is listening');
    } catch (error) {
        console.log(error)
    }
}

main()