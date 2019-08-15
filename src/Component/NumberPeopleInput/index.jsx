import React from 'react';
import { Link } from "react-router-dom";

export default function NumberPeopleInput() {
    return (
        <>
            <header>
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
            </header>
            <section>
                <div className="row">
                    <div className="number-people">
                        <div className="black-square">
                            <h1>来客人数を入力してください</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}