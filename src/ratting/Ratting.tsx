import React from "react";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
type RattingPropsType = {
    value: number
}
export function Ratting(props: RattingPropsType) {
    console.log("UncontrolledRatting rendering")
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>

        </div>

    );
}
type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }

}