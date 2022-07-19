import React from 'react';
import classes from './navshops.module.css';
import { NavLink } from 'react-router-dom';


const NavShops = () => {
    
    let setActive = ({ isActive }) => isActive ? classes.active : classes.notactive;

    return (

        <div className={classes.wrapper}>
            <ul>
                <li><NavLink to='shop1' className={setActive}>Shop1</NavLink> </li>
                <li><NavLink to='shop2' className={setActive}>Shop2</NavLink> </li>
                <li><NavLink to='shop3' className={setActive}>Shop3</NavLink> </li>
                <li><NavLink to='shop4' className={setActive}>Shop4</NavLink> </li>

            </ul>
        </div>
    );
}


export default NavShops;
