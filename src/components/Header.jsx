import React from 'react';
import { Box, Center, Heading, useColorModeValue } from '@chakra-ui/react';
import logo from '../assets/images/todo.png';

const Header = () => {
  const textColor = useColorModeValue('teal.400', 'teal.300');

  return (
    <Center display='flex' flexDir={'row'} mb={8} >
      <Box boxSize={{ base: '40px', md: "60px" }}>
        <img src={logo} alt="Logo" />
      </Box>
      <Heading ml={{ base: 3, md: 7 }} fontWeight={{ base: 500, md: 700 }} fontSize={{ base: 35, md: 60 }} color={textColor} fontFamily='heading'>
        TODO APP
      </Heading>
    </Center>
  );
};

export default Header;