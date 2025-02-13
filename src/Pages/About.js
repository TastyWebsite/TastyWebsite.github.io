import React, {useEffect, useState} from 'react';
import LinksPage from "../LinksPage";
import chef from "../data/chef.json"
import ImgEnd from "../components/ImgEnd";
import {Link} from "react-router-dom";
import open from "../data/open.json";

function About(props) {
    const [cheff, setCheff] = useState([])
    useEffect(()=>{
        setCheff(chef)
    })
    return (
        <div>
            <LinksPage/>
            <div className={"img1"}>
                <div className={"rgb"}>
                    <div className={"linkdiv1"}>
                        <p><Link to={'/home'} className={"linktext"}>HOME</Link></p>
                        <u className={"menuu"}>ABOUT</u>
                    </div>
                    <br/>
                    <span className={"sp01"}>About us</span>
                </div>
            </div>
            <div  id={"d22"}>
                <div  id={"di1"}></div>
                <div id={"di2"}>
                    <p className={"p01"}>ABOUT TASTY</p>
                    <br/>
                    <span className={"sp02"}>Our chef cooks the most<br/> delicious food for you</span>
                    <br/><br/><br/>
                    <p className={"p01"}>Far far away, behind the word mountains, far from the<br/>
                        countries Vokalia and Consonantia, there live the blind<br/>
                        texts. Separated they live in Bookmarksgrove right at the<br/>
                        coast of the Semantics, a large language ocean.<br/>
                        <br/>

                        A small river named Duden flows by their place and<br/>
                        supplies it with the necessary regelialia. It is a<br/>
                        paradisematic country, in which roasted parts of<br/>
                        sentences fly into your mouth.
                    </p>
                </div>
            </div>


            <div className={"c1"}>
                <p className={"p4"}>OUR CHEF</p>
                <br/>
                <b className={"b2"}>Our Master Chef</b>
            </div>
            <div className={"c2"}>
                <div className={"c3"}>
                    {chef.map((item) => (
                        <div key={item.id} className={"c01"}>
                            <p className={"p5"}>{item.chef1}</p>
                            <br/>
                            <p className={"p4"}>{item.chef2}</p>
                            <br/>
                            <img src={item.img8} className={"imgchef"}/>
                        </div>
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

export default About;