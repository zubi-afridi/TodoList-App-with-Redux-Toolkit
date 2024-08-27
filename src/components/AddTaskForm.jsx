import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Input, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { taskActions } from '../redux/slices/TaskSlice';

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const inputBg = useColorModeValue('gray.200', 'gray.700');
  const inputColor = useColorModeValue('gray.800', 'white');

  const handleAddTaskBtn = () => {
    const inputValue = inputRef.current.value.trim();
    if (inputValue) {
      dispatch(taskActions.addTask(inputValue));
      inputRef.current.value = ''; // Clear input after adding task
    }
  };

  return (
    <>
      <Text fontWeight={{ base: 400, md: 600 }} fontSize={{ base: 20, md: 30 }} mb={{ base: 'none', md: 1 }} fontFamily='body'>
        New Task
      </Text>
      <Flex
        as="form"
        onSubmit={(e) => { e.preventDefault(); handleAddTaskBtn(); }}
        align="center" // Ensures items are aligned vertically
        gap={{ base: '2', md: '4' }} // Adds spacing between Input and Button
        mb={2} // Adds margin-bottom
      >
        <Input
          ref={inputRef}
          variant='outline'
          borderColor='teal.300'
          _focus={{ borderColor: 'teal.500' }}
          htmlSize={50}
          width={{ base: '200px', md: 'auto' }}
          placeholder='Enter your task here...'
          bg={inputBg}
          color={inputColor}
        />
        <Button
          colorScheme='teal'
          variant='solid'
          type="submit"
          _hover={{ bg: 'teal.500' }}
          _active={{ bg: 'teal.600' }}
          fontSize={{ base: '14px', md: "15px" }}
        >
          Add Task
        </Button>
      </Flex>
    </>
  );
};

export default AddTaskForm;
