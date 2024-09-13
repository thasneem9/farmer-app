import React from 'react'
import { Flex,Container, HStack ,Box,Heading,Button,Text,Link} from '@chakra-ui/react'
import ProductCard from '../ProductCard'
import {useNavigate} from'react-router-dom';
import { useState,useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom';

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
  <Box>
    {/* Navbar */}
    <Flex
      as="nav"
      bg="blue.600"
      color="white"
      p="10px"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="md"
    >
      <HStack spacing="20px">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="xl" fontWeight="bold">Home</Text>
        </Link>
        <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="xl" fontWeight="bold">About</Text>
        </Link>
        <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="xl" fontWeight="bold">Contact</Text>
        </Link>
      </HStack>
      <Button
        as={RouterLink}
        to="/sell"
        colorScheme="teal"
        variant="solid"
      >
        Upload Product
      </Button>
    </Flex>

    {/* Main Content */}
    <Box bg="gray.50" p="20px">
      <Flex
        flexDirection="column"
        maxWidth="1200px"
        margin="auto"
        alignItems="center"
      >
        <Button
          mb="20px"
          p="20px 40px"
          fontWeight="bold"
          fontSize="2xl"
          colorScheme="yellow"
        >
          Farm Products Nearby
        </Button>

        <Flex
          wrap="wrap"
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {posts?.length > 0 ? (
            posts.map((post) => (
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
          ) : (
            <Text>No posts available</Text>
          )}
        </Flex>
      </Flex>
    </Box>
  </Box>
);
};

export default BuyPage;