import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Blog from './Blog';
import Home from './Home';

import ErrorPage from './ErrorPage'




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




        ]
    }


]);
export default router;