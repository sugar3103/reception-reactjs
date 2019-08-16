import React from 'react';
import { Link } from "react-router-dom";
import NumberPeopleSmall from '../NumberPeopleSmall';
import Header from '../Header';

export default function NumberPeopleInput() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            <Header />
            <section className="container-fluid">
                <div className="row">
                    <div className="col-md-12 number-people">
                        <div className="black-square">
                            <h1>来客人数を入力してください</h1>
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