import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TasksList from './components/TasksList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <>
      <Navbar />
      <Flex w='100%' minH='100vh' bg={bg}>
        <Flex w='100%' flexDir={'column'} mx='10%' mt={'4%'} color={color}>
          <Header />
          <AddTaskForm />
          <TasksList />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default App;