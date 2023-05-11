import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Meta} from "@storybook/react";
import {Accordion} from "./Accordion";

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
};

export default meta;
const callback = action('accordion mode change event fired')
export const MenuCollapsedMode = ()=> < Accordion titleValue={'Menu'} collapsed={true} onChange={callback} />
export const UsersUncollapsedMode = ()=> <Accordion titleValue={'Users'} collapsed={false} onChange={callback} />


export const  ModeChange = ()=> {
    const [value, setValue]= useState<boolean>(true)
    return < Accordion titleValue={'Users'} collapsed={value} onChange={()=>setValue(!value)}/>
}