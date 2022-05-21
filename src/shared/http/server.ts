import dotenv from 'dotenv';
dotenv.config();

(async () => {
    const app = (await import('./config/app')).default;
    app.listen(process.env.PORT || 3333, () => {
        console.log(`Server is running at http::/localhost:${process.env.PORT || 3333}`)
    })
})()