import React, { useRef, useEffect} from "react";

export default function AvatarItem(props) {
    const target = useRef(null);
    function setSelected(value) {
        props.setCurrentState(prevValue => {
            if (prevValue[props.menu] === value) {
                return ({
                    ...prevValue,
                    [props.menu]: {
                        name: "",
                        file: "blank.png"
                    }
                });
            }
            else {
                return ({
                    ...prevValue,
                    [props.menu]: value
                });
            }
        });
    }

    useEffect(() => {
        target.current?.scrollIntoView({ behavior: 'smooth' });
    }, [props.menu, props.currentState])

    return (
        <div ref={props.currentState[props.menu] === props.item ? target : null} className={"avatar-item" + (props.currentState[props.menu] === props.item ? " selected" : "")} onClick={() => setSelected(props.item)}>
            <div>
                <img src={"./assets/" + props.item.file} alt={props.item.name} />
                <p>{props.item.name}</p>
            </div>
        </div>
    );
}