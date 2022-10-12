import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Blog from './Blog';
import ErrorPage from './ErrorPage'




const router = createBrowserRouter([

    {
        path: '/', element: <Root></Root>, errorElement: <ErrorPage></ErrorPage>,
        children: [

            { path: 'blog', element: <Blog></Blog> },


        ]
    }


]);
export default router;