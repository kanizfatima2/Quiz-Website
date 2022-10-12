import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* to add <Footer</Footer> */}
        </div>
    );
};

export default Root;