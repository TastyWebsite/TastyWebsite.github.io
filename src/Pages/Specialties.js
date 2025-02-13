import React, {useEffect, useState} from 'react';
import LinksPage from "../LinksPage";
import special from '../data/special.json'
import ImgEnd from "../components/ImgEnd";
import {Link} from "react-router-dom";
import open from "../data/open.json";

function Specialties(props) {

    return (
        <div>
            <LinksPage/>
            <div className={"img1"}>
                <div className={"rgb"}>
                    <div className={"linkdiv3"}>
                        <p><Link to={'/home'} className={"linktext"}>HOME</Link></p>
                        <u className={"menuu"}>SPECIALTIES</u>
                    </div>
                    <br/>
                    <span className={"sp01"}>Our Specialties</span>
                </div>
            </div>

            <div className={"z1"}>
                <div className={"zz1"}>
                    <p className={"b02"}>Our Specialties</p>
                </div>
            </div>
            <div className={"z2"}>
                <div className={"z3"}>
                    {special.map((item) => (
                        <>
                            {item.show ? <div key={item.id} className={"z01"}>
                                <div className={"z02"}>
                                    <p className={"text3"}>{item.text3}</p>
                                    <br/>
                                    <p className={"text4"}>{item.text4}</p>
                                    <br/>
                                    <b className={"price2"}>{item.price1}</b>
                                </div>
                                <div className={"z03"}>
                                    <img src={item.img6} className={"img4"}/>
                                </div>
                            </div> : <div key={item.id} className={"z01"}>
                                <div className={"z03"}>
                                    <img src={item.img6} className={"img4"}/>
                                </div>
                                <div className={"z02"}>
                                    <p className={"text3"}>{item.text3}</p>
                                    <br/>
                                    <p className={"text4"}>{item.text4}</p>
                                    <br/>
                                    <b className={"price2"}>{item.price1}</b>
                                </div>

                            </div>}
                        </>
                    ))}
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

export default Specialties;