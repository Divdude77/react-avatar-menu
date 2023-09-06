import React from "react";
import { IoColorPalette, IoEye } from "react-icons/io5"
import { GiNoseFront, GiLips, GiTopHat } from "react-icons/gi"
export default function MenuItem(props) {
    return (
        <div className={"menu-item " + (props.selected ? " selected" : "")} onClick={()=>props.setter(props.value)}>
            {
                {
                    'bases': <IoColorPalette />,
                    'eyes': <IoEye />,
                    'noses': <GiNoseFront />,
                    'mouths': <GiLips />,
                    'accessories': <GiTopHat />
                }[props.value]
            }
        </div>
    )
}