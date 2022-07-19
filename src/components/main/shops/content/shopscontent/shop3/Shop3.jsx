import React from "react";
import classes from './shop3.module.css';
import image from '../../../../../../image/imagesShop3.png';

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

const Shop3 = () => {

    return (
        <div className={classes.wrapper} >
            <ShopItem title='food #1.3' prise='1' />
            <ShopItem title='food #2.3' prise='2' />
            <ShopItem title='food #3.3' prise='3' />
            <ShopItem title='food #4.3' prise='4' />
            <ShopItem title='food #5.3' prise='5' />
            <ShopItem title='food #6.3' prise='6' />
            <ShopItem title='food #7.3' prise='7' />
            <ShopItem title='food #8.3' prise='8' />
        </div>
    );
}


export default Shop3;