import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ q }) => {
    const { options, question, correctAnswer } = q;

    const showToastMessage = (value) => {
        // console.log(value)
        if (value === correctAnswer) {
            toast.success('Correct Answer !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            toast.success('Wrong Answer !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }

    };
    // console.log(options[0], id, question, correctAnswer)
    return (
        <div>
            <section className="bg-gray-800 text-gray-100 mt-5">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                    <h3 className="mb-12  leading-none text-center font-bold text-xl">Quiz: {question}</h3>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div className='flex justify-center'>
                            <div class="form-check">
                                <input value={options[0]} onClick={e => showToastMessage(e.target.value)} class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>

                                <h3 class="form-check-label inline-block text-gray-100" for="flexRadioDefault2">
                                    {options[0]}
                                </h3>
                                {/* <h3 className="font-semibold"></h3> */}
                                <ToastContainer />
                            </div>

                        </div>

                        <div className='flex justify-center'>
                            <div class="form-check">
                                <input value={options[1]} onClick={e => showToastMessage(e.target.value)} class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                                <h3 class="form-check-label inline-block text-gray-100" for="flexRadioDefault2">
                                    {options[1]}
                                </h3>
                                <ToastContainer />
                                {/* <h3 className="font-semibold"></h3> */}
                            </div>
                            {/* <h3 className="font-semibold">{options[1]}</h3> */}

                        </div>
                        <div className='flex justify-center'>
                            <div class="form-check">
                                <input value={options[2]} onClick={e => showToastMessage(e.target.value)} class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                                <h3 class="form-check-label inline-block text-gray-100" for="flexRadioDefault2">
                                    {options[2]}
                                </h3>
                                {/* <h3 className="font-semibold"></h3> */}
                            </div>
                            {/* <h3 className="font-semibold">{options[1]}</h3> */}
                            <ToastContainer />
                        </div>
                        <div className='flex justify-center'>
                            <div class="form-check">
                                <input value={options[3]} onClick={e => showToastMessage(e.target.value)} class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                                <h3 class="form-check-label inline-block text-gray-100" for="flexRadioDefault2">
                                    {options[3]}
                                </h3>
                                {/* <h3 className="font-semibold"></h3> */}
                                <ToastContainer />
                            </div>
                            {/* <h3 className="font-semibold">{options[1]}</h3> */}

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Questions;