import express from 'express'
import cors from 'cors'

const app=express()
app.use(cors())
app.use(express.json())

//routes
/* app.use('api/users',userRoute)
app.use('api/posts',postRoute) */


const PORT= 5000


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)

})