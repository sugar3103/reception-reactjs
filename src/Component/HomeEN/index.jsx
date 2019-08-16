import React from 'react';
import { Link } from 'react-router-dom'

export default function HomeEN(props) {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 home-big-1">
                        <Link to="/">
                            <img src="./assets/Home/logo.jpg" alt="logo" />
                        </Link>

                        <Link to="/lang=ja"><button className="btn-home-big-1">
                            <i className="fas fa-globe"></i> 日本語</button>
                        </Link>
                    </div>
                    <div className="col-md-8 home-small-1 img-100 home-background-stats">
                        <Link to="/numberOfPeople">
                            <button className="btn-home-square">
                                <img src="./assets/Home/calender.png" style={{ width: "150px" }} alt="calender" />
                                <p>Visit with</p>
                                <p>Reservation</p>
                                <div className="underline"></div>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-2 home-small-2 img-100 home-background-stats">
                        <a href="_blank">
                            <button className="btn-home-square">
                                <img src="./assets/Home/calender.png" style={{ width: "100px" }} alt="calender" />
                                <p>Visit without</p>
                                <p>Reservation</p>
                                <div className="underline"></div>
                            </button>
                        </a>
                    </div>
                    <div className="col-md-2 home-small-3 img-100 home-background-stats">
                        <a href="_blank">
                            <button className="btn-home-square">
                                <img src="./assets/Home/meetings.png" style={{ width: "100px" }} alt="meetins" />
                                <p>Visit for</p>
                                <p>Job Interview</p>
                                <div className="underline"></div>
                            </button>
                        </a>
                    </div>
                    <div className="col-md-2 home-small-4 img-100 home-background-stats">
                        <a href="_blank">
                            <button className="btn-home-square">
                                <img src="./assets/Home/info-table.png" style={{ width: "100px" }} alt="info-table" />
                                <p>General</p>
                                <p>Reception</p>
                                <div className="underline"></div>
                            </button>
                        </a>
                    </div>
                    <div className="col-md-2 home-small-5 img-100 home-background-stats">
                        <a href="_blank">
                            <Link to="/delivery">
                                <button className="btn-home-square">
                                    <img src="./assets/Home/trucks.png" style={{ width: "100px" }} alt="trucks" />
                                    <p>To</p>
                                    <p>Couriers</p>
                                    <div className="underline"></div>
                                </button>
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}