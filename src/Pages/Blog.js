import React, {useEffect, useState} from 'react';
import LinksPage from "../LinksPage";
import ImgEnd from "../components/ImgEnd";
import infoBlog from "../data/infoBlog.json";
import {Link} from "react-router-dom";
import open from "../data/open.json";

function Blog(props) {
    const [blog, setBlog] = useState([]);
    useEffect(()=>{
        setBlog(infoBlog)
    })
    return (
        <div>
            <LinksPage/>
            <div className={"img1"}>
                <div className={"rgb"}>
                    <div className={"linkdiv1"}>
                        <p><Link to={'/home'} className={"linktext"}>HOME</Link></p>
                        <u className={"menuu"}>BLOG</u>
                    </div>
                    <br/>
                    <span className={"sp01"}>Blog</span>
                </div>
            </div>
            <div className={"yy"}>
                <div className={"yy1"}>
                    {infoBlog.map((item) => (
                        <div key={item.id} className={"y01"}>
                            <img src={item.img7} className={"img01"}/>
                            <br/><br/>
                            <span className={"sp2"}>{item.text5}</span>
                            <br/>
                            <b className={"b1"}>{item.text6}</b>
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

export default Blog;