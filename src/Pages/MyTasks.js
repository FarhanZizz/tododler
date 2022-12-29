import React from 'react';
import { useSelector } from 'react-redux';

const MyTasks = () => {
    const tasks = useSelector((state) => state.tasks);
    console.log(tasks.tasks);
    return (
        <div>
            My Tasks
        </div>
    );
};

export default MyTasks;