import React from 'react'
import { Flex, HStack ,Box, Avatar,Text, VStack,Image} from '@chakra-ui/react'


const ProductCard = ({owner,price,name,updatedAt,description,img,location}) => {

  
  return (
    
    <Box
      bg="white"
      p="20px"
      m="15px"
      borderRadius="md"
      boxShadow="md"
      width="300px"
      transition="all 0.3s"
      _hover={{ transform: 'scale(1.03)', boxShadow: 'lg' }}
    >
      <Flex flexDirection="column" alignItems="center">
        <HStack spacing="10px" mb="10px">
          <Avatar size="md" name={owner} />
          <VStack align="start" spacing="2px">
            <Text fontSize="lg" fontWeight="bold">{name}</Text>
            <Flex>
              <Text fontSize="sm" color="gray.600">{owner}</Text>
              <Text fontSize="md" fontWeight="bold" ml="10px">{price}</Text>
            </Flex>
            <Text fontSize="sm" color="gray.500">{location}</Text>
          </VStack>
        </HStack>
        <Text mb="10px" fontSize="sm" color="gray.700">{description}</Text>
        <Image src={img} alt={name} borderRadius="md" />
      </Flex>
    </Box>
  );
};

export default ProductCard;