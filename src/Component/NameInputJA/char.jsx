import React from 'react';
import { Link } from "react-router-dom";

export default function Char(props) {
    const sendText = (value) => {
        props.setText(value)
    }
    return (
        <span className="key" onClick={() => sendText(props.char)}>
            <i className="keychar">{props.char}</i>
        </span>

    )
}