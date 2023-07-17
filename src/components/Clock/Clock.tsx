import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
mode?: 'digital' | 'analog'
}


export const Clock: React.FC<PropsType> = (props)=>{
    const [date, setDate] =useState(new Date())

    useEffect(()=>{

       const intervalId = setInterval(()=>{
           console.log('Tick')
            setDate(new Date())
        },1000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[])

    // const secondsString = get2digitsString(date.getSeconds())
    // const minutesString = get2digitsString(date.getMinutes())
    // const hoursString = get2digitsString(date.getHours())

    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case "digital":
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {/*<span>{hoursString}</span>*/}
        {/*:*/}
        {/*<span>{minutesString}</span>*/}
        {/*:*/}
        {/*<span>{secondsString}</span>*/}
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}

