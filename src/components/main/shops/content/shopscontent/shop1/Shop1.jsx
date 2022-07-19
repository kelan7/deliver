import React from "react";
import classes from './shop1.module.css';
import image from '../../../../../../image/images.png';

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

const Shop1 = () => {

    return (
        <div className={classes.wrapper} >
            <ShopItem title='food #1' prise='100' />
            <ShopItem title='food #2' prise='200' />
            <ShopItem title='food #3' prise='300' />
            <ShopItem title='food #4' prise='400' />
            <ShopItem title='food #5' prise='500' />
            <ShopItem title='food #6' prise='600' />
            <ShopItem title='food #7' prise='700' />
            <ShopItem title='food #8' prise='800' />
        </div>
    );
}


export default Shop1;