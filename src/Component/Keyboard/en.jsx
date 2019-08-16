import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Char from "./char";

export default function KeyBoard() {

    const abcChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        , '!', '?', '#', '$', '%', '&', '@', '+', '-', '=', '_', '*', '/', "'", ',', '.', ':', ';', '(', ')', '[', ']'
        , '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    const jaChar = ['F', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        , '!', '?', '#', '$', '%', '&', '@', '+', '-', '=', '_', '*', '/', "'", ',', '.', ':', ';', '(', ')', '[', ']'
        , '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const active = "abc";

    const inputref = React.createRef();

    const [keyboard, setKeyboard] = useState(abcChar);

    const [activeKeyBoard, setActive] = useState(active);
    const [companyName, setCompanyName] = useState("");
    const switchKeyboardABC = (e) => {
        e.preventDefault();
        setKeyboard(abcChar);
        setActive("abc");
    }

    const switchKeyboardJP = (e) => {
        e.preventDefault();
        setKeyboard(jaChar);
        setActive("jp");        
    }

    const setText = (value) => {
        // console.log(inputref)
        // if(companyName.length > 0)
        //     inputref.current.focus();
        if(value == "-1")
        {
            let newCompanyName = companyName.substring(0, companyName.length-1);
            setCompanyName(newCompanyName)
        } else
            setCompanyName(companyName + value)
        // console.log("value from keyboards " + value)
    }

    const onChangeCompanyName = (value) => {
        setCompanyName(value)
    }
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 headers">
                            <Link to="/">
                                <button className="arrow-back">
                                    <img src="./assets/arrow-back.png" alt="arrow-back" />
                                    戻る
                            </button>
                            </Link>
                            <img className="header-logo" src="./assets/people/logo-4.png" alt="logo-4" />
                            <button className="header-button-right">
                                キャンセル
                        </button>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="container-fluid">
                    <div className="row keyboard-page">
                        <div className="col-md-12 no-padding">
                            <div className="black-square">
                                <h1>Please input your company name (optional)</h1>
                                <div className="company-name-container">
                                    <form className="form-inline" action="/" method="GET">
                                        <div className="form-group">
                                            <input ref= { inputref } type="text" className="form-control company-name" placeholder="Input company name" value={companyName} onChange={onChangeCompanyName} />
                                        </div>
                                        <button type="submit" className="btn btn-skip">Skip</button>                                            
                                    </form>
                                </div>
                                <div className="keyboard-container">
                                    <div className="keyswitch-container">
                                        <span className={(activeKeyBoard === 'abc')?"key keyspace switch-key-abc active":"key keyspace switch-key-abc"} onClick={switchKeyboardABC}>
                                            <i className="keychar">ABC</i>
                                        </span>
                                        <span className={(activeKeyBoard === 'jp')?"key keyspace switch-key-abc active":"key keyspace switch-key-abc"} onClick={switchKeyboardJP}>
                                            <i className="keychar">JP</i>
                                        </span>
                                    </div>
                                    <div className="keychar-container">
                                        {
                                            keyboard.map((c,index) =>
                                                <Char key={index} char={c} setText={setText} />
                                            )
                                        }
                                        <span className="key keyspace" onClick={() => setText(" ")}>
                                            <i className="keychar"></i>
                                        </span>
                                    </div>
                                    <div className="keyaction-container">
                                        <span className="key key-back-abc" onClick={() => setText("-1")}>
                                            <i className="keychar"><i className="fas fa-backspace"></i></i>
                                        </span>
                                        <span className="key key-space-abc" onClick={() => setText(" ")}>
                                            <i className="keychar">Space</i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}