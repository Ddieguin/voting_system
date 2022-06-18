import 'reflect-metadata';
import 'express-async-errors';
import dotenv from 'dotenv';
import createConnection from "../db/index";
dotenv.config();


createConnection()
    .then(async () => {
        const app = (await import('./config/app')).default;
        app.listen(process.env.PORT || 3333, () => {
            console.log(
        `Server is running at http://localhost:${process.env.PORT || 3333}`,
      );
    });
});
