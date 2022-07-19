import React from "react";
import classes from './shop2.module.css';
import image from '../../../../../../image/imagesShop2.png';

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

const Shop2 = () => {

    return (
        <div className={classes.wrapper} >
            <ShopItem title='food #1.2' prise='10' />
            <ShopItem title='food #2.2' prise='20' />
            <ShopItem title='food #3.2' prise='30' />
            <ShopItem title='food #4.2' prise='40' />
            <ShopItem title='food #5.2' prise='50' />
            <ShopItem title='food #6.2' prise='60' />
            <ShopItem title='food #7.2' prise='70' />
            <ShopItem title='food #8.2' prise='80' />
        </div>
    );
}


export default Shop2;