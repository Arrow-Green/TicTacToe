import React from "react";

export default function Cell(props) {
    return (
        <button className={'cell'} onClick={props.onButtonClick}>
            {props.value}
        </button>
    )
}