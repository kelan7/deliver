import React from 'react';
import Content from './content/Content';
import classes from './shops.module.css';
import NavShops from './shopsnav/NavShops';


const Shops = () => {

    return (
        <div className={classes.wrapper}>
            <NavShops />
            <Content />
        </div>
    );
}


export default Shops;
