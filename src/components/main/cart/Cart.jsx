import React from 'react';
import classes from './cart.module.css';
import Product from './product/Product';
import UserData from './userData/UserData';


const Cart = () => {

    return (
        <div className={classes.wrapper}>
            <UserData />
            <Product />
        </div>
    );
}


export default Cart;
