import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../AuthProvider/AuthProvider';

const AddTask = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const HandleAddTask = (event) => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const image = form.image.value
        const description = form.description.value
        const email = user.email
        const completed = false
        const task = { title, image, description, email, completed }

        fetch('https://tododler-server.vercel.app/addtask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset()
                    toast.success('Task Successfully added')
                    navigate('/mytask');
                }
                else {
                    toast.error(data.message);
                }
            })
    }
    return (

        <form onSubmit={HandleAddTask} className=' md:w-2/3 lg:w-1/2 mx-auto my-24'>
            <h1 className='text-center text-3xl mb-10'>Adding a Task</h1>
            <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Add Title <span className='text-red-600'>*</span></label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL <span className='text-red-600'>*</span></label>
            </div >
            <div className='mb-10'>
                <textarea id="message" name='description' rows="4" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Description"></textarea>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

        </form >

    );
};

export default AddTask;