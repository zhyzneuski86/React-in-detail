import React from 'react';
import {action} from "@storybook/addon-actions";
import {Meta} from "@storybook/react";
import UncontrolledAccordion from "./UncontrolledAccordion";

const meta: Meta <typeof UncontrolledAccordion> = {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
};

export default meta;

export const ModeChange = () => {
    return <UncontrolledAccordion titleValue={'Users'}/>
}