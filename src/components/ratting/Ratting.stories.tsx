import React, {useState} from 'react';
import {Ratting, RattingValueType} from "./Ratting";
import {Meta} from "@storybook/react";

const meta: Meta<typeof Ratting> = {
    title: 'Ratting',
    component: Ratting,
};

export default meta;

export const EmptyRatting = ()=> <Ratting value={0} onClick={x=>x}/>
export const  Ratting1 = ()=> <Ratting value={1} onClick={x=>x}/>
export const  Ratting2 = ()=> <Ratting value={2} onClick={x=>x}/>
export const  Ratting3 = ()=> <Ratting value={3} onClick={x=>x}/>
export const  Ratting4 = ()=> <Ratting value={4} onClick={x=>x}/>
export const  Ratting5 = ()=> <Ratting value={5} onClick={x=>x}/>
export const  ChangeRatting = ()=> {
    const [ratting, setRatting]= useState<RattingValueType>(5)
    return <Ratting value={ratting} onClick={setRatting}/>
}