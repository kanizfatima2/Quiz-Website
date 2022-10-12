import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const QuizDetails = () => {
    const LoadedQuestion = useLoaderData();
    const questions = LoadedQuestion.data.questions;

    console.log(questions)
    return (
        <div>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl mt-5">WoooHoooo <span className="text-violet-400 "> Let's Start </span></h2>
            {
                questions.map(q => <Questions q={q}></Questions>)
            }
        </div>
    );
};

export default QuizDetails;