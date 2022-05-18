import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/button'


const AddUser = props => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredAge('');
        setEnteredUserName('');
    }
    
    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label>Username</label>
            <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler} />
            <label htmlFor='age'>Age (years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
            <Button type="submit">Add User</Button>
            </form>
        </Card>
        )
}

export default AddUser;