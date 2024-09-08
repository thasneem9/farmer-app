import React from 'react'
import { Flex,Container, HStack ,Box,Heading,Button,Text} from '@chakra-ui/react'
import ProductCard from '../ProductCard'
import {useNavigate} from'react-router-dom';
import { useState,useEffect } from 'react'


const BuyPage = () => {
  const navigate=useNavigate()
  const [posts,setPosts]=useState([])
const handleUpload=()=>{
navigate('/sell')

}
useEffect(()=>{
  const getFeed=async()=>{
    try {
      const res=  await fetch('/api/products/getProducts',{
        method:'GET',
        headers:{"Content-Type":'application/json'},
    
      })
      const data= await res.json()
      console.log(data)
      setPosts(data)
      
    } catch (error) {
      console.error("error in fetching posts",error)
      
    }
  }
getFeed()

},[])


 

  return (
    <Flex flexBasis="960px" m="30px" bg=""   flexDirection={"column"} width={"870px"} alignItems={"center"}  justifyContent={"center"}  marginLeft={"300px"}>
          <Text  height="50px" fontWeight={"bold"} fontSize={'xx-large'}>Buy Products Directly!</Text>
     
       
       
     <Flex   wrap={"wrap"}  alignItems={"center"}  justifyContent={"center"} >
   
     {posts?.length>0?(
      posts.map((post)=>(
      <ProductCard 
      key={post.id}
      owner={post.owner}
      name={post.Name}
      price={post.price}
       description={post.description} 
       img={post.img} 
       postedBy={post.postedBy} 
       location={post.location} 
       updatedAt={post.updatedAt}
       />
       ))
       ):(
       <p>No posts awvilble</p>
       )}
     </Flex>
       
   
        <Button onClick={handleUpload} width={"200px"} bg={"green.100"}>Upload Product</Button>
        
    </Flex>
  
  )
}

export default BuyPage