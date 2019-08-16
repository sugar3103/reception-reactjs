import React from 'react';
import {Link} from 'react-router-dom';

export default function Complete() {
    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-md-12 delivery">
                    <div className="black-square">
                        <div className="delivery-content">
                            <img src="./assets/people.png" style={{ width: "86px" }} alt="trucks" />
                            <h3>担当者を呼び出しました</h3>
                            <h3>お迎えに参りますので、そのままお待ちください</h3>
                            <br></br>
                            <Link to="/">
                                <button>閉じる</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}