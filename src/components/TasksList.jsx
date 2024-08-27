import React from 'react';
import { useSelector } from 'react-redux';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import TaskItem from './TaskItem';

const TasksList = () => {
  const { incompleteTasks, completedTasks } = useSelector((state) => state);
  const noTaskMessageColor = useColorModeValue('gray.400', 'gray.600');
  const tabBg = useColorModeValue('white', 'gray.800');
  const tabTextColor = useColorModeValue('gray.800', 'white');
  const tabSelectedColor = 'teal.500';

  return (
    <Tabs mt={8} variant='enclosed'>
      <TabList>
        <Tab _selected={{ color: tabSelectedColor, borderColor: tabSelectedColor }} bg={tabBg} color={tabTextColor}>
          Pending Tasks
        </Tab>
        <Tab _selected={{ color: tabSelectedColor, borderColor: tabSelectedColor }} bg={tabBg} color={tabTextColor}>
          Finished Tasks
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {incompleteTasks.length === 0 ? (
            <Flex justify='center' align='center' height='200px'>
              <Text fontSize={{ base: 'lg', md: '2xl' }} color={noTaskMessageColor}>No tasks listed for today. Enjoy your time!</Text>
            </Flex>
          ) : (
            incompleteTasks.map((task, index) => (
              <TaskItem
                key={index}
                task={task}
                index={index}
                isCompleted={false}
              />
            ))
          )}
        </TabPanel>
        <TabPanel>
          {completedTasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              isCompleted={true}
            />
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TasksList;
