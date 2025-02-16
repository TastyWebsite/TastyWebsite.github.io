import React, {useState, useEffect} from 'react';
import imgEnd from '../data/imgEnd.json';
import {Link} from "react-router-dom";

function ImgEnd(props) {
    const [img, setImg] = useState([]);
    const [show, setShow] = useState(null);

    const handleBlock = (id)=>{
        setShow(id);
    }
    const handleNone = () =>{
        setShow(null);
    }
    useEffect(() => {
        setImg(imgEnd);
    }, []);

    return (
        <div>
            <div className={"pp1"}>
            {img.map((item) => (
                <div key={item.id} className={"pp2"} onMouseOver={()=>handleBlock(item.id)} onMouseOut={handleNone}>
                    <img src={item.img5} className={"pp01"}/>
                    {show===item.id ?(
                        <div className={"instalink"}>
                                <div className={"instaicon"}></div>
                        </div>
                    ):null}
                </div>
            ))}
            </div>
        </div>
    );
}

export default ImgEnd;
