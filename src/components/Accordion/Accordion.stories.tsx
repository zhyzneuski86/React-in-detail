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
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = ()=> < Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}
onClick={onClickCallback}/>
export const UsersUncollapsedMode = ()=> <Accordion titleValue={'Users'} collapsed={false} onChange={callback}
         items={[{title:'Dima', value: 1}, {title:'Mikita', value: 2},  {title:'Artem', value:3},  {title:'Misha', value:3}]}
onClick={onClickCallback}/>


export const  ModeChange = ()=> {
    const [value, setValue]= useState<boolean>(true)
    return < Accordion titleValue={'Users'} collapsed={value} onChange={()=>setValue(!value)}
           items={[
               {title:'Dima', value: 1},
               {title:'Mikita', value: 2},
               {title:'Artem', value:3},
               {title:'Misha', value:3}]}
                       onClick={(value)=>{alert(`user with ID ${value} should be happy`)}}/>
}