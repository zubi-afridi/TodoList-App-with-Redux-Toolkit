import React from 'react';
import { Box, Flex, Button, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.200', 'gray.800');

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={{ base: '33px', md: "40px" }}>
          ZubiDev.
        </Heading>
        <Flex alignItems='center'>
          <Button onClick={toggleColorMode} variant='outline'>
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;