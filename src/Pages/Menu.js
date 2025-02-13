import React, {useState} from 'react';
import LinksPage from "../LinksPage";
import {Carousel} from "nuka-carousel";
import Main from "../components/Main";
import data from "../data/data.json"
import ImgEnd from "../components/ImgEnd";
import {Link} from "react-router-dom";
import open from "../data/open.json";


function Menu(props) {
    const [time, setTime] = useState([])

    const handleTime=(time)=>{
        setTime(data.filter((ev)=>ev.name===time))
    }
    return (
        <div>
            <LinksPage/>
            <div className={"img1"}>
                <div className={"rgb"}>
                    <div>
                        <div className={"linkdiv1"}>
                            <p><Link to={'/home'} className={"linktext"}>HOME</Link></p>
                            <u className={"menuu"}>MENU</u>
                        </div>
                    </div>
                    <br/>
                    <span className={"sp01"}>Discover our Exclusive Menu</span>
                </div>
            </div>
            <div className={"dd"}>
                <div className={"dd1"}>
                    <div className={"dd01"}>
                        <input type={"text"} placeholder={"Name"} className={"in1"}/>
                        <input type={"text"} placeholder={"Phone"} className={"in1"}/>
                        <input type={"date"} className={"in1"}/>
                        <select className={"in1"} onChange={() => handleTime("time")}>
                            {data.map((item) => (
                                <optgroup key={item.id}>
                                    <option className={"op"}>{item.op}</option>
                                </optgroup>
                            ))}
                        </select>
                        <select className={"in1"}>
                            <optgroup>
                                <option>Person</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </optgroup>
                        </select>
                        <button className={"bt2"}>Book a table</button>
                    </div>
                </div>
            </div>


            <div className={"kk2"}>
                <span className={"sp1"}>OUR MENU</span>
                <br/>
                <p className={"p1"}>Discover Our Exclusive Menu</p>
            </div>
            <Main/>
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
    )

}

export default Menu;