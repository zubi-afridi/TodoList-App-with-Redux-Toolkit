import React from 'react';
import { Box, Container, Stack, Text, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialButton = ({ label, href, icon, iconColor, borderColor }) => {
  const buttonColor = useColorModeValue('gray.200', 'gray.500'); // Color for light and dark mode

  return (
    <IconButton
      aria-label={label}
      icon={React.cloneElement(icon, { size: '1.25rem' })} // Set icon size
      as="a"
      href={href}
      target="_blank" // Open link in a new tab
      rel="noopener noreferrer" // For security
      bg={buttonColor}
      borderRadius="full" // Ensures circular shape
      size="md" // Adjust size to fit icon nicely
      color={iconColor} // Color of the icon
      border={`2px solid ${borderColor}`} // Border color
      _hover={{
        bg: useColorModeValue('gray.300', 'gray.500'),
      }}
      _active={{
        bg: useColorModeValue('gray.400', 'gray.600'),
      }}
      display="flex" // Center icon vertically and horizontally
      alignItems="center"
      justifyContent="center"
    />
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
      py={3}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text
          fontSize="sm"
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          © 2024 Zubair Khan | Todo List App using React & Redux Toolkit | All rights reserved.
        </Text>
        <Stack direction={'row'} spacing={4}>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/zubair-khan-web-developer'}
            icon={<FaLinkedin />}
            iconColor="#0A66C2" // LinkedIn color
            borderColor="#0A66C2" // LinkedIn color
          />
          <SocialButton
            label={'GitHub'}
            href={'https://github.com/zubi-afridi'}
            icon={<FaGithub />}
            iconColor="#181717" // GitHub color
            borderColor="#181717" // GitHub color
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
