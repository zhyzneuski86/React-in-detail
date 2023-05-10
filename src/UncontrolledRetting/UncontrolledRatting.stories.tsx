import React from 'react';
import {UncontrolledRatting} from "./UncontrolledRatting";
import {Meta} from "@storybook/react";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof UncontrolledRatting> = {
    title: 'UncontrolledRatting',
    component: UncontrolledRatting,
};

export default meta;
const callback = action('ratting change inside component')

export const EmptyRatting = ()=> <UncontrolledRatting defaultValue={0} onChange={callback} />
export const  Ratting1 = ()=> <UncontrolledRatting defaultValue={1} onChange={callback}/>
export const  Ratting2 = ()=> <UncontrolledRatting defaultValue={2} onChange={callback}/>
export const  Ratting3 = ()=> <UncontrolledRatting defaultValue={3} onChange={callback}/>
export const  Ratting4 = ()=> <UncontrolledRatting defaultValue={4} onChange={callback}/>
export const  Ratting5 = ()=> <UncontrolledRatting defaultValue={5} onChange={callback}/>

