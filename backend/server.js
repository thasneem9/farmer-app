
import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors from 'cors'
import sequelize from './database/database.js'
import UserRoute from './routes/UserRoute.js'
import ProductRoute from './routes/ProductRoute.js'

import cookieParser from 'cookie-parser'
import {v2 as cloudinary} from "cloudinary";
const app=express();


app.use(cors())
app.use(cookieParser()); 
const PORT=5000;

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body

app.use(express.json())
app.use('/api/users',UserRoute)
app.use('/api/products',ProductRoute)




// Sync models and start server
sequelize.sync({ force: false }) // means dont create tables unles necary
.then(() => {
    console.log('Database synced successfully');
})
.catch((err) => {
    console.log('Error syncing the database:', err);
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)

})