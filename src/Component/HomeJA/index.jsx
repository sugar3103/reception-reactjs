import React from 'react';
import { Link } from 'react-router-dom'

export default function HomeJA(props) {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 home-big-1">
                        <Link to="/lang=ja">
                            <img src="./assets/Home/logo.jpg" alt="logo" />
                        </Link>
                        <Link to="/"><button className="btn-home-big-1"><i class="fas fa-globe"></i> ENGLISH</button></Link>
                    </div>
                    <div className="col-md-8 home-small-1 img-100 home-background-stats">
                        <Link to="/numberOfPeople=ja">
                            <button className="btn-home-square">
                                <img src="./assets/Home/calender.png" style={{ width: "150px" }} alt="calender" />
                                <p></p>
                                <p>アポイントがある方</p>

                                <div className="underline"></div>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-2 home-small-2 img-100 home-background-stats">
                        <Link to="/company-name">
                            <button className="btn-home-square">
                                <img src="./assets/Home/calender.png" style={{ width: "100px" }} alt="calender" />
                                <p></p>
                                <p>アポイントのない方</p>

                                <div className="underline"></div>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-2 home-small-3 img-100 home-background-stats">
                        <Link to="/delivery-ja">
                            <button className="btn-home-square">
                                <img src="./assets/Home/meetings.png" style={{ width: "100px" }} alt="meetins" />
                                <p></p>
                                <p>面接の方</p>

                                <div className="underline"></div>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-2 home-small-4 img-100 home-background-stats">
                        <a href="_blank">
                            <button className="btn-home-square">
                                <img src="./assets/Home/info-table.png" style={{ width: "100px" }} alt="info-table" />
                                <p></p>
                                <p>総合受付</p>

                                <div className="underline"></div>
                            </button>
                        </a>
                    </div>
                    <div className="col-md-2 home-small-5 img-100 home-background-stats">
                        <Link to="/delivery=ja">
                            <button className="btn-home-square">
                                <img src="./assets/Home/trucks.png" style={{ width: "100px" }} alt="trucks" />
                                <p></p>
                                <p>配送業者の方</p>

                                <div className="underline"></div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}