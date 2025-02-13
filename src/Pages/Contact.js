import React from 'react';
import LinksPage from "../LinksPage";
import {Carousel} from "nuka-carousel";
import ImgEnd from "../components/ImgEnd";
import {Link} from "react-router-dom";
import open from "../data/open.json";

function Contact(props) {
    return (
        <div>
            <LinksPage/>
            <div className={"img1"}>
                <div className={"rgb"}>
                    <div className={"linkdiv4"}>
                        <p><Link to={'/home'} className={"linktext"}>HOME</Link></p>
                        <u className={"menuu"}>CONTACT</u>
                    </div>
                    <br/>
                    <span className={"sp01"}>Contact us</span>
                </div>
            </div>

            <div className={"vv"}>
                <div className={"v1"}>
                    <span className={"sp3"}>Contact Information</span>
                    <br/><br/>
                    <div className={"v01"}>
                        <p className={"p6"}>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                    <br/>
                    <div className={"v01"}>
                        <p className={"p6"}>Phone: <span className={"sp4"}> + 1235 2355 98</span></p>
                    </div>
                    <br/>
                    <div className={"v01"}>
                        <p className={"p6"}>Email: <span className={"sp4"}>info@yoursite.com</span></p>
                    </div>
                    <br/>
                    <div className={"v01"}>
                        <p className={"p6"}>Website <span className={"sp4"}>yoursite.com</span></p>
                    </div>
                </div>
                <div className={"v2"}>
                    <input className={"in3"} type={"text"} placeholder={"Your Name"}/>
                    <br/>
                    <input className={"in3"} type={"email"} placeholder={"Your Email"}/>
                    <br/>
                    <input className={"in3"} type={"text"} placeholder={"Subject"}/>
                    <br/>
                    <textarea className={"in4"} placeholder={"Message"}></textarea>
                    <br/>
                    <button className={"bt5"}>Send Message</button>
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

export default Contact;