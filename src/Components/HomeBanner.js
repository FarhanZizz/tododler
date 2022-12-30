import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Assets/53338.png'

const HomeBanner = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center my-24">
                <img className='md:w-1/3 mx-auto' src={Banner} alt="" />
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight mb-8">Achieve peace of mind with ToDodler.</h1>
                    <Link className="rounded-lg inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" to='/addtask' role="button">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;