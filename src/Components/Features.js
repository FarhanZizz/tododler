import React from 'react';
import gear from '../Assets/settings-gears.png'
import light from '../Assets/lightbulb.png'
import puzzle from '../Assets/puzzle-piece.png'
import time from '../Assets/time.png'

const Features = () => {
    return (
        <div >
            <h1 className='font-semibold text-2xl text-center mb-20'>Delightfully simple and deceptively powerful task management</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly lg:px-10 gap-14">
                <div className="flex items-center ">
                    <img className="w-20 h-20 rounded" src={gear} alt="Extra large avatar"></img>
                    <div className="font-medium dark:text-white mx-4">
                        <div>Make ToDodler yours</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Customize your to-do list with filters, labels, priorities, and more.</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <img className="w-20 h-20 rounded" src={light} alt="Extra large avatar"></img>
                    <div className="font-medium dark:text-white mx-4">
                        <div>There's a template for that</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Customize your Project templates are available to get you started with whatever's on your plate.</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <img className="w-20 h-20 rounded" src={time} alt="Extra large avatar"></img>
                    <div className="font-medium dark:text-white mx-4">
                        <div>Productivity Methods</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Personal productivity recommendations based on your unique traits and strengths.</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <img className="w-20 h-20 rounded" src={puzzle} alt="Extra large avatar"></img>
                    <div className="font-medium dark:text-white mx-4">
                        <div>Connect with your other tools</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Link Todoist with your calendar, voice assistant, and 70+ other tools.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;