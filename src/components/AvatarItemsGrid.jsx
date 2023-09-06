import React from "react";
import AvatarItem from "./AvatarItem";

export default function AvatarItemsGrid(props) {
    return (
        <div className="avatar-items-grid">
            <p>{props.menu.charAt(0).toUpperCase() + props.menu.slice(1)}</p>
            <div>
                {props.items.map((item, index) => <AvatarItem key={index} menu={props.menu} item={item} currentState={props.currentState} setCurrentState={props.setCurrentState}/>)}
            </div>
        </div>
    );
}