
import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors from 'cors'
import sequelize from './database/database.js'
import UserRoute from './routes/UserRoute.js'
import cookieParser from 'cookie-parser'

const app=express();


app.use(cors())
app.use(cookieParser()); 
const PORT=5000;


app.use(express.json())
app.use('/api/users',UserRoute)




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