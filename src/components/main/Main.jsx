import React from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from './main.module.css';
import Cart from './cart/Cart';
import Shops from './shops/Shops';

const Main = () => {

    return (
        <div className={classes.wrapper}>

            <Routes>
                <Route path='' element ={<Shops/>}/>
                <Route element={<Shops />} path='shops/*' />
                <Route element={<Cart />} path='cart' />
            </Routes>

        </div>
    );
}


export default Main;