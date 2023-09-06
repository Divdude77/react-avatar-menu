import React from "react";
import mergeImages from 'merge-images';
import Button from "./Button";
import { GiRollingDices } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { assets } from "./assets";

export default function CustomAvatar(props) {

    mergeImages(['./assets/' + props.currentState.bases.file, './assets/' + props.currentState.eyes.file, './assets/' + props.currentState.noses.file, './assets/' + props.currentState.mouths.file, './assets/' + props.currentState.accessories.file]).then(b64 => {
        document.querySelector('img.avatar').src = b64;
        document.querySelector('a.download').href = b64;
        document.querySelector('#favicon').href = b64;
    });

    function randomizeCurrentState() {
        props.setCurrentState({
            bases: assets.bases[Math.floor(Math.random() * assets.bases.length)],
            eyes: assets.eyes[Math.floor(Math.random() * assets.eyes.length)],
            noses: assets.noses[Math.floor(Math.random() * assets.noses.length)],
            mouths: assets.mouths[Math.floor(Math.random() * assets.mouths.length)],
            accessories: assets.accessories[Math.floor(Math.random() * assets.accessories.length)]
        });

    }

    function clearCurrentState() {
        props.setCurrentState({
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
    }

    return (
        <>
            <div className="action-buttons">
                <Button onclick={randomizeCurrentState} value={<GiRollingDices />}/>
                <Button onclick={clearCurrentState} value={<MdDelete />} delete={true}/>
            </div>
            <div className="custom-avatar">
                <img className="avatar" src="" alt="Avatar"/>
                <a href="." className="download" download="avatar">
                    <Button styles={{paddingBottom: '5px'}}value="Save as PNG"/>
                </a>
            </div>
        </>
    );
}