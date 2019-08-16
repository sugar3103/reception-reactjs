import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-md-12 headers">
                    <Link to={props.link}>
                        <button className="arrow-back">
                            <img src="./assets/arrow-back.png" alt="arrow-back" />
                            {props.return}
                            </button>
                    </Link>
                    <img className="header-logo" src="./assets/people/logo-4.png" alt="logo-4" />
                    <Link to={props.link}>
                        <button className="header-button-right">  
                            {props.cancel}
                            </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}