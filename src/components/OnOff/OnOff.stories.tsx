import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Meta} from "@storybook/react";
import {OnOff} from "./OnOff";

const meta: Meta<typeof OnOff> = {
    title: 'OnOff',
    component: OnOff,
};

export default meta;
const callback = action('on or off clicked')
export const OnMode = ()=> <OnOff on={true} onChange={callback } />
export const OffMode = ()=> <OnOff on={false} onChange={callback} />

export const  ModeChange = ()=> {
    const [value, setValue]= useState<boolean>(true)
    return <OnOff on={value}  onChange={setValue}/>
}