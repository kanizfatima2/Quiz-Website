import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Blog from './Blog';
import Home from './Home';

import ErrorPage from './ErrorPage'
import QuizDetails from './QuizDetails';
import Statistics from './Statistics';




const router = createBrowserRouter([

    {
        path: '/', element: <Root></Root>, errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`)
            },
            {
                path: 'home',
                element: <Home></Home>,
                loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },

            {
                path: '/quiz/:quizId',
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <QuizDetails></QuizDetails>
            },
            {
                path: 'statistics',
                loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
                element: <Statistics></Statistics>
            }




        ]
    }


]);
export default router;