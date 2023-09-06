import React from "react";
import MenuItem from "./MenuItem";

export default function MenuBar(props) {
    const menuItems = ['bases', 'eyes', 'noses', 'mouths', 'accessories'];

    return (
        <div className="menu-bar">
            {menuItems.map((item, index) => <MenuItem key={index} value={item} selected={props.currentItem === item} setter={props.setCurrentItem}/>)}
        </div>
    );
}