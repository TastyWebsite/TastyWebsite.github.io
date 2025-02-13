import React, {useState} from 'react';
import LinksPage from "../LinksPage";
import ImgEnd from "../components/ImgEnd";
import {Link} from "react-router-dom";
import data from "../data/data.json"
import open from "../data/open.json";

function Reservation(props) {
    const [time, setTime] = useState([])

    const handleTime=(time)=>{
        setTime(data.filter((ev)=>ev.name===time))
    }
    return (
        <div>
            <LinksPage/>
            <div className={"img1"}>
                <div className={"rgb"}>
                    <div className={"linkdiv2"}>
                        <p><Link to={'/home'} className={"linktext"}>HOME</Link></p>
                        <u className={"menuu"}>RESERVATION</u>
                    </div>
                    <br/>
                    <span className={"sp01"}>Make a Reservation</span>
                </div>
            </div>
            <div className={"ww"}>
                <div className={"ww1"}>
                    <b className={"b05"}>Make a Reservation</b>
                </div>
                <div className={"ww2"}>
                    <div className={"ww01"}></div>
                    <div className={"ww02"}>
                        <form className={"form1"}>
                            <b className={"b06"}>Name</b>
                            <br/>
                            <input type={"text"} placeholder={"Your Name"} className={"in2"}/>
                            <br/>
                            <b className={"b06"}>Phone</b>
                            <br/>
                            <input type={"number"} placeholder={"Phone"} className={"in2"}/>
                            <br/>
                            <b className={"b06"}>Time</b>
                            <br/>
                            <select className={"in2"} onChange={() => handleTime("time")}>
                                {data.map((item) => (
                                    <optgroup key={item.id}>
                                        <option className={"op"}>{item.op}</option>
                                    </optgroup>
                                ))}
                            </select>
                            <br/>
                            <button className={"bt4"}>Make a Reservation</button>
                        </form>
                    </div>
                    <div className={"ww03"}>
                        <div className={"ww003"}>
                            <form className={"form1"}>
                                <b className={"b06"}>Email</b>
                                <br/>
                                <input type={"email"} placeholder={"Your Email"} className={"in2"}/>
                                <br/>
                                <b className={"b06"}>Date</b>
                                <br/>
                                <input type={"date"} placeholder={"Date"} className={"in2"}/>
                                <br/>
                                <b className={"b06"}>Person</b>
                                <br/>
                                <select className={"in2"}>
                                    <optgroup>
                                        <option>Person</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4+</option>
                                    </optgroup>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"insta"}>
                <div className={"insta01"}>
                    <span className={"sp04"}>INSTAGRAM</span>
                </div>
            </div>
            <ImgEnd/>


            <div className={"e1"}>
                <div className={"e2"}>
                    <div className={"e3"}>
                        <b className={"b3"}>Tasty</b>
                        <br/><br/><br/>
                        <p className={"p6"}>Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.</p>
                        <div className={"ic"}>
                            <div className={"icon01"}></div>
                            <div className={"icon02"}></div>
                            <div className={"icon03"}></div>
                        </div>
                    </div>
                    <div className={"e3"}>
                        <b className={"b3"}>Opening Hours</b>
                        <br/><br/><br/>
                        {open.map((item) => (
                            <div key={item.id}>
                                <p className={"p7"}>{item.time}</p>
                            </div>
                        ))}
                    </div>
                    <div className={"e3"}>
                        <b className={"b3"}>Contact Information</b>
                        <br/><br/><br/>
                        <p className={"p8"}>198 West 21th Street, Suite 721<br/> New York NY 10016</p>
                        <br/>
                        <p className={"p8"}>+ 1235 2355 98</p>
                        <br/>
                        <p className={"p8"}>info@yoursite.com</p>
                        <br/>
                        <p className={"p8"}>email@email.com</p>
                    </div>
                    <div className={"e3"}>
                        <b className={"b3"}>Newsletter</b>
                        <br/><br/><br/>
                        <p className={"p6"}>Far far away, behind the word mountains, far from the countries.</p>
                        <br/>
                        <div className={"ps"}>
                            <input type={"text"} placeholder={"Subscribe"} className={"in01"}/>
                            <div className={"tele"}></div>
                        </div>
                    </div>
                </div>
                <p className={"p6"}>Copyright ©2025 All rights reserved | This template is made with by Colorlib</p>
            </div>
        </div>
    );
}

export default Reservation;