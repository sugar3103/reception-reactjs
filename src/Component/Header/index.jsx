import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-md-12 headers">
                    <Link to="/">
                        <button className="arrow-back">
                            <img src="./assets/arrow-back.png" alt="arrow-back" />
                            戻る
                            </button>
                    </Link>
                    <img className="header-logo" src="./assets/people/logo-4.png" alt="logo-4" />
                    <Link to="/">
                        <button className="header-button-right">
                            キャンセル
                            </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}