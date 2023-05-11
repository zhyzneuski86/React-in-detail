import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
    // component: input,
};

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChangeHandler}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value:{value}</>
}

export const ControlledInput = () => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    const [parentValue, setParentValue] = useState('')
    return <input value={parentValue} onChange={onChangeHandler}/>
}
export const ControlledCheckBox = () => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    const [parentValue, setParentValue] = useState(true)
    return <input type='checkbox' checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect = () => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    const [parentValue, setParentValue] = useState<string | undefined>('2')

    return <select value={parentValue} onChange={onChangeHandler}>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>
}

export const ControlledInputWithValue = () => <input value={'it=incubator'}/>