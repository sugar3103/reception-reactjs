import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

export default function Delivery() {
    return (
        <>
            <Header />
            <section className="container-fluid">
                <div className="row">
                    <div className="col-md-12 delivery">
                        <div className="black-square">
                            <div className="delivery-content">
                                <img src="./assets/Home/trucks.png" style={{ width: "122px" }} alt="trucks" />
                                <h3>配達業者の方</h3>
                                <h3>恐れ入りますが、3階の通用口までお越しください</h3>
                                <br></br>
                                <Link to="/">
                                    <button>閉じる</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}