import React from 'react';
import { Link } from 'react-router-dom';



const Quiz = ({ quiz }) => {
    const { name, logo, total, id } = quiz
    // console.log(name);
    return (
        <div>
            <div className="rounded-md shadow-md bg-gray-900 text-gray-100">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" ></img>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="text-gray-100">{total} Question</p>
                    </div>
                    <Link to={`/quiz/${id}`}>  <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Start Practice</button> </Link>
                </div>
            </div>

        </div>
    );
};

export default Quiz;