import React, {ChangeEvent, ChangeEventHandler, useCallback, useMemo, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'useMemo',

};


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempresultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempresultA = tempresultA * i
        }
        return tempresultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Vad', 'Ivan'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('v') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add users</button>
        {counter}

        <Users users={newArray}/>
    </>
}

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    // const addBook = () => {
    //     console.log(books)
    //     const newBooks = [...books, 'Angular ' + new Date().getTime()]
    //     setBooks(newBooks)
    // }
    // const memorizedAddBook = useMemo(() => {
    //     return () => {
    //         console.log(books)
    //         const newBooks = [...books, 'Angular ' + new Date().getTime()]
    //         setBooks(newBooks)
    //     }
    // }, [books])

    const memorizedAddBook2 = useCallback(() => {
            console.log(books)
            const newBooks = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memorizedAddBook2}/>
    </>
}
type BooksSecretPropsType = {
    addBook: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add books</button>
    </div>
}
const Book = React.memo(BooksSecret)
