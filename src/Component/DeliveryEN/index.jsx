import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

export default function DeliveryEN(props) {
    
    return (
        <>
            <Header link={"/"} return={"Return"} cancel={"Cancel"}/>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-md-12 delivery no-padding">
                        <div className="black-square">
                            <div className="delivery-content">
                                <img src="./assets/Home/trucks.png" style={{ width: "122px" }} alt="trucks" />
                                <h3>{props.t("delivery.title1", { framework: "react-i18next" })}</h3>
                                
                                <h3>Please come to the entrance on the 3rd floor.</h3>
                                <br></br>
                                <Link to="/">
                                    <button>Close</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}