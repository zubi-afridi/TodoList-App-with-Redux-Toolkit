import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Input, Text, IconButton, Checkbox, useColorModeValue } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { taskActions } from '../redux/slices/TaskSlice';

const TaskItem = ({ task, index, isCompleted }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editInputValue, setEditInputValue] = useState(task); // Initialize with the task text

  // Ensure editInputValue is always synced with the current task when editing starts
  useEffect(() => {
    if (isEditing) {
      setEditInputValue(task); // Set the input value to the current task text
    }
  }, [isEditing, task]);

  const bg = useColorModeValue('light.listBg', 'dark.listBg');
  const color = useColorModeValue('light.text', 'dark.text');

  const handleTaskStatusChange = () => {
    dispatch(taskActions.changeTaskStatus({ task, index, isCompleted: !isCompleted }));
  };

  const handleEditTask = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value); // Update the input field as the user types
  };

  const handleConfirmEdit = () => {
    if (editInputValue.trim()) {
      if (isCompleted) {
        dispatch(taskActions.confirmEditTask({ index, newTask: editInputValue.trim(), isCompleted: true }));
      } else {
        dispatch(taskActions.confirmEditTask({ index, newTask: editInputValue.trim(), isCompleted: false }));
      }
      setIsEditing(false); // Disable editing mode after saving
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false); // Cancel editing mode
    setEditInputValue(task); // Reset input value to the current task text
  };

  const handleDeleteTask = () => {
    if (isCompleted) {
      dispatch(taskActions.deleteCompleteTask(index));
    } else {
      dispatch(taskActions.deleteIncompleteTask(index));
    }
  };

  return (
    <Flex alignItems="center" my={4} bg={bg} p={3} px={{ base: 3, md: 6 }} borderRadius="md" shadow="md">
      <Checkbox mr={3} isChecked={isCompleted} onChange={handleTaskStatusChange} />
      {isEditing ? (
        <>
          <Input
            value={editInputValue}
            onChange={handleEditInputChange}
            onKeyDown={(e) => { if (e.key === 'Enter') handleConfirmEdit(); }}
            mr={2}
            bg='gray.600'
            color={color}
          />
          <IconButton
            icon={<CheckIcon />}
            color='green.400'
            _hover={{ bg: 'green.400', color: 'white' }}
            onClick={handleConfirmEdit}
            mr={2}
          />
          <IconButton
            icon={<CloseIcon />}
            color='red.400'
            _hover={{ bg: 'red.400', color: 'white' }}
            onClick={handleCancelEdit}
          />
        </>
      ) : (
        <>
          <Text flex={1} color={color} fontSize="lg">{task}</Text>
          {!isCompleted && (
            <IconButton
              icon={<EditIcon />}
              color='yellow.500'
              _hover={{ bg: 'yellow.400', color: 'white' }}
              mr={3}
              onClick={handleEditTask}
            />
          )}
          <IconButton
            icon={<DeleteIcon />}
            color='red.500'
            _hover={{ bg: 'red.400', color: 'white' }}
            aria-label="Delete Task"
            onClick={handleDeleteTask}
          />
        </>
      )}
    </Flex>
  );
};

export default TaskItem;
