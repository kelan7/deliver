import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';


const Nav = () => {
    let setActive = ({ isActive }) => isActive ? classes.active : classes.notactive;

    return (
        <div className={classes.wrapper}>
            <div className={classes.links}>
                <NavLink to='/shops' className={setActive}>Shops</NavLink>
                <NavLink to='/cart' className={setActive}>Shoping Cart</NavLink>
            </div>
        </div>
    );
}


export default Nav;
