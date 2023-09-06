import React from "react";

export default function Button(props) {
    return (
        <div onClick={props.onclick} className={"button" + (props.delete ? " delete" : "")} style={props.styles}>
            <div>{props.value}</div>
        </div>
    );
}