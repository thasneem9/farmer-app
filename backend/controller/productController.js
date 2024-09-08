
import User from "../Models/User.js";
import Product from "../models/Product.js";
import bcrypt from 'bcrypt';
import generateTokenAndSetCookie from "../helpers/generateTokensAndCookies.js";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from "cloudinary"


const uploadProduct=async(req,res)=>{
    const dataReceived=req.body;
    const name=dataReceived.name
    const description=dataReceived.description
    const owner=dataReceived.owner
    const price=dataReceived.price
    const location=dataReceived.location
    let img=dataReceived.image;
    console.log("IMAG+++++++",img)
    try {
        const token = req.cookies.jwt;
        console.log("postttttttt token",token)
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.userId;

        console.log("Decoded Token:", decodedToken);

        console.log("Decoded User ID:", userId);

        console.log("title,contnet:",name,description)
        if(img){
            const uploadedResponse=await cloudinary.uploader.upload(img);
            img=uploadedResponse.secure_url;
        }
        const newPost= await Product.create({
            Name:name,
           description:description,
            postedBy:userId,
            price:price,
            owner:owner,
            img:img,
            location:location
        


        })
        res.status(200).json({ message: "post creation successful",data:newPost });



        
    } catch (error) {
        res.status(400).json({error})
        console.log(error)
        
    }
}
const getProducts=async(req,res)=>{
    //get all posts from Post table
    try {
        const posts= await Product.findAll()
        console.log(posts)
        res.status(200).json(posts)
        
    } catch (error) {
        res.status(400).json({message:"posts fetched sucesfully",posts})
        
    }
}
export {uploadProduct,getProducts}