import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function HomeEN(props) {
    const active = "ja";
    const { t, i18n } = props
    const [activeKeyBoard, setActive] = useState(i18n.language);
    console.log("i18n from home", i18n.language)
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 home-big-1">
                        <Link to="/">
                            <img src="./assets/Home/logo.jpg" alt="logo" />
                        </Link>
                        {/* <button className={(i18n.language === 'ja')?"btn-home-big-1":"btn-home-big-1-none"} onClick={()=> i18n.changeLanguage('ja')}>
                            <i className="fas fa-globe"></i> JP</button>
                        
                        <button className={(i18n.language === 'en')?"btn-home-big-1":"btn-home-big-1-none"} onClick={()=> i18n.changeLanguage('en')}>
                            <i className="fas fa-globe"></i> ENG</button> */}

                        <button className="btn-home-big-1" onClick={() => i18n.changeLanguage((i18n.language === 'ja') ? "en" : "ja")}>
                            <i className="fas fa-globe"></i> {(i18n.language === 'ja') ? "日本語" : "ENGLISH"}</button>

                    </div>
                    <div className="col-md-8 home-small-1 img-100 home-background-stats no-padding">
                        <Link to="/numberOfPeople=en">
                            <button className="btn-home-square">
                                <div className="btn-home-square-content">
                                    <div className="btn-home-square-img">
                                        <img src="./assets/Home/calender.png" style={{ width: "150px" }} alt="calender" />
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: props.t('home.title1', { framework: "react-i18next" }) }}>
                                    </p>
                                    <div className="underline"></div>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-2 home-small-2 img-100 home-background-stats no-padding">
                        <Link to="/company-name-en">
                            <button className="btn-home-square">
                                <div className="btn-home-square-img">
                                    <img src="./assets/Home/calender.png" style={{ width: "100px" }} alt="calender" />
                                </div>
                                <p>Visit without</p>
                                <p>Reservation</p>
                                <div className="underline"></div>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-2 home-small-3 img-100 home-background-stats no-padding">
                        <Link to="/delivery=en">
                            <button className="btn-home-square">
                                <div className="btn-home-square-img">
                                    <img src="./assets/Home/meetings.png" style={{ width: "100px" }} alt="meetins" />
                                </div>
                                <p>Visit for</p>
                                <p>Job Interview</p>
                                <div className="underline"></div>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-2 home-small-4 img-100 home-background-stats no-padding">
                        <Link to="/delivery=en">
                            <button className="btn-home-square">
                                <div className="btn-home-square-img">
                                    <img src="./assets/Home/info-table.png" style={{ width: "100px" }} alt="info-table" />
                                </div>
                                <p>General</p>
                                <p>Reception</p>
                                <div className="underline"></div>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-2 home-small-5 img-100 home-background-stats no-padding">
                        <a href="_blank">
                            <Link to="/delivery=en">
                                <button className="btn-home-square">
                                    <div className="btn-home-square-content">
                                        <div className="btn-home-square-img">
                                            <img src="./assets/Home/trucks.png" style={{ width: "100px" }} alt="trucks" />
                                        </div>
                                        <p dangerouslySetInnerHTML={{ __html: props.t('delivery.title1', { framework: "react-i18next" }) }}>
                                        </p>
                                        <div className="underline"></div>
                                    </div>
                                </button>
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}