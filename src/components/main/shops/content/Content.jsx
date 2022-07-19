import React from 'react';
import classes from './content.module.css';
import { Route, Routes } from 'react-router-dom';
import Shop1 from './shopscontent/shop1/Shop1';
import Shop2 from './shopscontent/shop2/Shop2';
import Shop3 from './shopscontent/shop3/Shop3';
import Shop4 from './shopscontent/shop4/Shop4';


const Content = () => {

    return (
        <div className={classes.wrapper}>
            {/* <Shop1/> */}
            <Routes>
                {/* <Router path='/shops/' element={<Shop1 />}/> */}
                <Route element={<Shop1 />} path='/shop1' />
                <Route element={<Shop2 />} path='/shop2' />
                <Route element={<Shop3 />} path='/shop3' />
                <Route element={<Shop4 />} path='/shop4' />
                
            </Routes>

        </div>
    );
}


export default Content;
