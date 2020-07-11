import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOff} from './OnOff';

export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action("on or off clicked")

export const Onmode = () => <OnOff on={true} onChange={callback}/>;
export const Offmode = () => <OnOff on={false} onChange={callback}/>;

export const RatingChanging = () => {
    const [value, setValue]= useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>;
}
