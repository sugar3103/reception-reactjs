import React from 'react';
import { Link } from "react-router-dom";
import NumberPeopleSmall from '../NumberPeopleSmall';
import Header from '../Header';

export default function NumberPeopleInputEN() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            <Header link={"/"} return={"Return"} cancel={"Cancel"}/>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-md-12 number-people no-padding">
                        <div className="black-square">
                            <h1>Please enter the number of visitors</h1>
                            <div className="col-md-6 people-1-9">
                                {array.map((element, index) => <NumberPeopleSmall thutu={element} key={index} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}