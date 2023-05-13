import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'React.memo Demo',
    // component: input,
};

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Vad', 'Ivan'])

    const addUser = ()=>{
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }


    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <button onClick={addUser}> add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}