import React, {useEffect, useState} from 'react';
import info from '../data/info.json'

function Main(props) {
    const [main, setMain] = useState([])

    useEffect(() => {
        setMain(info.filter((ev) => ev.name === "main"));
    }, []);

    const handleShow=(food)=>{
        setMain(info.filter((ev)=>ev.name===food))

    }
    return (
        <div>
            <div className={"ll"}>
                <div className={"ll1"}>
                    <button className={"bt"} onClick={() => handleShow("main")}>
                        <div className={"icon1"}></div> <b>Main</b></button>
                    <button className={"bt"} onClick={() => handleShow("dessert")}>
                        <div className={"icon2"}></div> <b>Dessert</b></button>
                    <button className={"bt"} onClick={() => handleShow("drink")}>
                        <div className={"icon3"}></div><b>Drinks</b></button>
                </div>
            </div>
            <div className={"show"}>
                <div className={"show01"}>
                    {main.map((item) => (
                        <div key={item.id} className={"food"}>
                            <img src={item.img4} className={"img"}/>
                            <div className={"text"}>
                                <p className={"p2"}>{item.text1}</p>
                                <br/>
                                <p className={"p3"}>{item.text2}</p>
                            </div>
                            <p className={"price1"}>{item.price}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Main;