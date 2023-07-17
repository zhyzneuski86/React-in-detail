import React, {useState} from 'react';
import {Meta} from "@storybook/react";
import {Clock} from "./Clock";

const meta: Meta<typeof Clock> = {
    title: 'Clock',
    component: Clock,
};

export default meta;


export const  BaseAnalogExample = ()=> {
    return < Clock mode={'analog'}/>
}
export const  BaseDigitalExample = ()=> {
    return < Clock mode={'digital'}/>
}