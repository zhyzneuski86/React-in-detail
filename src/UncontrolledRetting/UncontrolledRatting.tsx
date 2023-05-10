import React, {useState} from "react";



export type RattingValueType = 0 | 1 | 2 | 3 | 4 | 5

 type RattingPropsType = {
    defaultValue?: RattingValueType
    onChange: (value: RattingValueType )=>void


}

export function UncontrolledRatting(props: RattingPropsType) {


    let [value, setValue] = useState<RattingValueType>(props.defaultValue ? props.defaultValue: 0)

    function handleSetValue (value: RattingValueType){
        setValue(value);
        props.onChange(value)
    }
    return (
        <div>
            <Star value={value} selected={value > 0} setValue={handleSetValue}/>
            <Star value={value} selected={value > 1} setValue={handleSetValue}/>
            <Star value={value} selected={value > 2} setValue={handleSetValue}/>
            <Star value={value} selected={value > 3} setValue={handleSetValue}/>
            <Star value={value} selected={value > 4} setValue={handleSetValue}/>

        </div>

    );
}


type StarPropsType = {
    selected: boolean;
    value: RattingValueType;
    setValue: (value: RattingValueType) => void;
}

function Star(props: StarPropsType) {
    // console.log("Star rendering")

    return <span onClick={()=>{props.setValue(props.value)}}>
    {props.selected ? <b> star </b> : "star"}
    </span>
}