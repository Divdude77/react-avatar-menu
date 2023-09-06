import React, { useState } from "react";
import MenuBar from "./MenuBar";
import AvatarItemsGrid from "./AvatarItemsGrid";
import CustomAvatar from "./CustomAvatar";
import { assets } from './assets';

export default function AvatarItemsMenu(props) {
    const [currentMenuOption, setCurrentMenuOption] = useState('bases');

    return (
        <div className="avatar-items-menu">
            <MenuBar currentItem={currentMenuOption} setCurrentItem={setCurrentMenuOption}/>
            <AvatarItemsGrid menu={currentMenuOption} items={assets[currentMenuOption]} currentState={props.currentState} setCurrentState={props.setCurrentState}/>
            <CustomAvatar currentState={props.currentState} setCurrentState={props.setCurrentState}/>
        </div>
    )
}