import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import CompletedCard from '../Components/CompletedCard';
import TaskCard from '../Components/TaskCard';

const CompletedTasks = () => {
    const { user } = useContext(AuthContext)
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/tasks?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    });
    return (
        <div className='mb-20'>
            <h1 className='text-center font-bold text-3xl mb-10'>Completed Tasks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10">
                {tasks.filter(task => task.completed === true).map(t => <CompletedCard refetch={refetch} key={t._id} t={t}></CompletedCard>)}
            </div>
        </div>
    );
};

export default CompletedTasks;