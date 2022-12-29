import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className="text-center text-gray-800 dark:text-white py-24 px-6">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">Task Management that's a breeze<br /><span className="text-blue-600">Even for toddlers</span></h1>
                <Link className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" to='/addtask' role="button">Get started</Link>
                <a className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 dark:hover:bg-gray-800 hover:bg-gray-200 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
            </div>
        </div>
    );
};

export default Hero;