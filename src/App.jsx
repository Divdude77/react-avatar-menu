import React, { useState } from "react";
import AvatarItemsMenu from "./components/AvatarItemsMenu";

export default function App() {
    const [currentState, setCurrentState] = useState({
        bases: {
            name: "",
            file: "blank.png"
        },
        eyes: {
            name: "",
            file: "blank.png"
        },
        noses: {
            name: "",
            file: "blank.png"
        },
        mouths: {
            name: "",
            file: "blank.png"
        },
        accessories: {
            name: "",
            file: "blank.png"
        }
    });

    return (
        <div>
            <AvatarItemsMenu currentState={currentState} setCurrentState={setCurrentState}/>
        </div>
    );
}