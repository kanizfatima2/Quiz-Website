import React from 'react';
import Lottie from 'lottie-react';
import reader from '../assets/reader.json';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Home = () => {
    const loadedData = useLoaderData();
    const quizData = loadedData.data;
    // console.log(quizData)
    return (
        // Adding hero items 
        <div>
            <section className="bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Quizee <br />
                            <span className="text-violet-400 text-2xl"> Easy And Intuitive Testing.</span>
                        </h1>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <Lottie animationData={reader} loop={true} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>

            {/* Card Items  */}
            <div>
                <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                    <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
                        {
                            quizData.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;