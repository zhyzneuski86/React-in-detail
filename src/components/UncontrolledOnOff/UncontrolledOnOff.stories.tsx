import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Meta} from "@storybook/react";
import { UncontrolledOnOff} from "./UncontrolledOnOff";

const meta: Meta<typeof UncontrolledOnOff> = {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

export default meta;
const callback = action('on or off clicked')

export const OnMode = ()=> <UncontrolledOnOff  defaultOn ={true} onChange={callback } />
export const OffMode = ()=> <UncontrolledOnOff  defaultOn ={false} onChange={callback} />

