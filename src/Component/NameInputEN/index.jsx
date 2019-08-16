import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Char from "./char";
import Header from '../Header';


export default function NameInputEN() {

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
            <Header link={"/lang=ja"} return={"戻る"} cancel={"キャンセル"}/>
            <section>
                <div className="container-fluid">
                    <div className="row keyboard-page">
                        <div className="col-md-12 no-padding">
                            <div className="black-square">
                                <h1>来客人数を入力してください</h1>
                                <div className="company-name-container">
                                    <form className="form-inline" action="/" method="GET">
                                        <div className="form-group">
                                            <input ref= { inputref } type="text" className="form-control company-name" placeholder="会社名を入力" value={companyName} onChange={onChangeCompanyName} />
                                        </div>
                                        <button type="submit" className="btn btn-skip">スキップ</button>                                            
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
                                        <span className="key key-back" onClick={() => setText("-1")}>
                                            <i className="keychar"><i className="fas fa-backspace"></i></i>
                                        </span>
                                        <span className="key key-space" onClick={() => setText(" ")}>
                                            <i className="keychar">空白</i>
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