
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import generateTokenAndSetCookie from "../helpers/generateTokensAndCookies.js"
import jwt from "jsonwebtoken";

const signup= async (req,res)=>{

const dataReceived=req.body;
const saltRounds=10;
console.log(dataReceived)
try {
    //take password and hash it.
    const password=dataReceived.password
    const hashedPassword=await bcrypt.hash(password,saltRounds)
   
    const newUser=await User.create({
        name:dataReceived.name,
        email:dataReceived.email,
        username:dataReceived.username,
        location:dataReceived.state,
        password:hashedPassword

    })
  

        console.log( "newuser:",newUser.id)
        //console.log("JWT Secret:", process.env.JWT_SECRET);
        try {
            generateTokenAndSetCookie(newUser.id, res);
        } catch (error) {
            console.error("Error in token generation:", error);
            return res.status(500).json({ error: "Token generation failed" });
        }
    res.status(200).json({ message: "Signup successful",data:newUser });

    
} catch (error) {
    console.error("Error during signup:", error);
    res.status(400).json({ error});

    
}



}
const login= async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

 
    try {
       //get password from db
       console.log("RECEIVED USERNAME:",username)
       console.log("Received body:", req.body);

      
       const user= await User.findOne({
        where:{username:username},
        attributes:['password','id']//select only password and id
       })
       
       const isMatch = await bcrypt.compare(password, user.password);
       if(isMatch){
        let token;
        try {
           token=generateTokenAndSetCookie(user.id, res);
       //works console.log("+++++++++++",user.id)
        } catch (error) {
            console.error("Error in token generation:", error);
            return res.status(500).json({ error: "Token generation failed" });
        }
        
        res.status(200).json({message:"login sucesful",username:username,isMatch:isMatch,token:token})
        
       }else{
        res.status(400).json({error:"incorect credentials"})
       }
    } catch (error) {
        res.status(400).json({error})
    }
}


export {signup,login}