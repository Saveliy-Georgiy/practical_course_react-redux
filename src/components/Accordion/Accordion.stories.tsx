import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion
titleValue={"Menu"}collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>;
export const UsersUncollapsedMode = () => <Accordion
    titleValue={"Users"} collapsed={false} onChange={callback} items={[{title: "Savva", value: 1}, {title: "Dima", value: 2}, {title: "Lexa", value: 3}]} onClick={onClickCallback}/>;

export const ModeChanging = () => {
    const [value, setValue]= useState<boolean>(true)
    return <Accordion
        titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)} items={[{title: "Savva", value: 1}, {title: "Dima", value: 2}, {title: "Lexa", value: 3}]} onClick={(value) => {alert(`user with Id ${value} should be happy`)}}/>;
}
