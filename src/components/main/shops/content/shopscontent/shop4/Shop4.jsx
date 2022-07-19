import React from "react";
import classes from './shop4.module.css';
import image from '../../../../../../image/imagesShop4.jpg';

const ShopItem = (props) => {
    return (
        <div className={classes.card}>
            <img src={image} alt='food' />
            <p>{props.title}</p>
            <p>Prise: {props.prise} $</p>
            <button>Add to cart</button>
        </div>
    )
}

const Shop4 = () => {

    return (
        <div className={classes.wrapper} >
            <ShopItem title='food #1.4' prise='101' />
            <ShopItem title='food #2.4' prise='201' />
            <ShopItem title='food #3.4' prise='301' />
            <ShopItem title='food #4.4' prise='401' />
            <ShopItem title='food #5.4' prise='501' />
            <ShopItem title='food #6.4' prise='601' />
            <ShopItem title='food #7.4' prise='701' />
            <ShopItem title='food #8.4' prise='801' />
        </div>
    );
}


export default Shop4;