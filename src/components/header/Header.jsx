import React from 'react';
import classes from './header.module.css';
import Nav from './nav/Nav';
import Title from './title/Title';


const Header = () => {
    
    return (
        <div className={classes.wrapper}>
            <Nav />
            <Title/>
        </div>
    );
}


export default Header;
