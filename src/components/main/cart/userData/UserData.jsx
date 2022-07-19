import React from "react";
import classes from './userData.module.css';


const UserData = () => {

    return (
        <div className={classes.wrapper} >
            <p>Name:</p>
            <input type='text' placeholder ='Add your Name'/>
            <p>Email:</p>
            <input type='email' placeholder='Add your Email' />
            <p>Phon:</p>
            <input type='tel' placeholder='Add your Phon' />
            <p>Adress:</p>
            <input type='text' placeholder='Add your adress' />
        </div>
    );
}



export default UserData;