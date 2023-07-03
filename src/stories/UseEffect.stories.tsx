import React, {useEffect, useMemo, useState} from 'react';


export default {
    title: 'useEffect Demo',

};

export const Example1 = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('Example1')

    useEffect(()=>{
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(()=>{
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(()=>{
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hollow, {counter} {fake}
        <button onClick={() => {setFake(fake + 1)}}>+ fake</button>
        <button onClick={() => {setCounter(counter + 1)}}>+ counter</button>

    </>
}

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')


    useEffect(()=>{
        console.log('useEffect first render and every counter change')

        setTimeout(()=>{
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)

    }, [counter])



    return <>
        Hollow, {counter} {fake}
        <button onClick={() => {setFake(fake + 1)}}>+ fake</button>
        <button onClick={() => {setCounter(counter + 1)}}>+ counter</button>

    </>
}