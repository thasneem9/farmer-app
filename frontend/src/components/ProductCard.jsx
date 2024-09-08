import React from 'react'
import { Flex, HStack ,Box, Avatar,Text,Button,Image} from '@chakra-ui/react'


const ProductCard = ({owner,price,name,updatedAt,description,img,location}) => {

  
  return (
          <>
      
    
            <Box bg="gray.100" m="20px" width={"300px"} borderRadius="15px" >
              <Flex flexDirection={"column"}>
              <HStack>
                <Avatar ml={"4px"} mt={"4px"}></Avatar>
              <Flex flexDirection={"column"}>
                <Text fontSize={"20px"}>{name}</Text>
                
               <Flex flexDirection={"row"}>
               <Text>{owner}</Text>

               <Text  mr={"0px"} ml={"50px"}>{location}</Text>
               </Flex>

              </Flex>
              </HStack>

              <Text p={"10px"}>
                {description}
              </Text>
           <Image src={img}></Image>

          
              </Flex>

            </Box>
 
            </>  
      
  )
}

export default ProductCard