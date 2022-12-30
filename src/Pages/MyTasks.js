import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Components/Loading';
import TaskCard from '../Components/TaskCard';

const MyTasks = () => {
    const { user } = useContext(AuthContext)
    const { data: tasks = [], refetch, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/tasks?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    });
    const task = useSelector((state) => state.tasks);
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(task)
    return (
        <div className='mb-20'>
            <h1 className='text-center font-bold text-3xl mb-10'>My Tasks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10">
                {tasks.filter(task => task.completed === false).map(t => <TaskCard refetch={refetch} key={t._id} t={t}></TaskCard>)}
            </div>
        </div>
    );
};

export default MyTasks;