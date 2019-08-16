import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header"

export default function MemberDetails() {
    return (
        <>
            <Header />
            <section className="container-fluid">
                <div className="row">
                    <div className="col-md-12 member">
                        <div className="black-square">
                            <div className="delivery-content">
                                <div className="member-img">
                                    <img src="./assets/user.png" style={{ width: "122px" }} alt="trucks" />
                                </div>
                                <h4>西垣伸之</h4>
                                <h5>テクニカルコンサルタント</h5>
                                <h6>Service Design Div.</h6>
                                <br></br>
                                <Link to="/">
                                    <button>呼び出し <img src="./assets/volumn.png" style={{ width: "30px", marginTop: "-5px" }} alt="volumn" /></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}