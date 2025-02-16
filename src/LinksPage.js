import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";


function LinksPage(props) {
    const [show,setShow] = useState(false);
    const [color,setColor] = useState('none');
    const [activeLink, setActiveLink] = useState(null)

    const handleShow=()=>{
        setShow(prevShow => !prevShow);
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setColor("rgb(64, 64, 68)");
            }else{
                setColor("none")
            }
        })
    },[])

    return (
        <ul className={"menu"} style={{background:color}}>
            <div className={"menu1"}>
                <li className={"tastymenu"}><Link to={'/'} reloadDocument className={"tasty"}>Tasty</Link></li>
            </div>
            <div className={"menu2"}>
                        <li className={"menuicon"}>
                            <div className={"menudiv"} onClick={handleShow}></div>
                            <p className={"menutext"}>MENU</p>
                        </li>
                        {show ?
                            <ul className={"mi1"}>
                                <li className={"li1"}><Link to={'/'}  className={"link"} reloadDocument >Home</Link></li>
                                <li className={"li1"}><Link to={'/menu'} className={"link"} reloadDocument >Menu</Link></li>
                                <li className={"li1"}><Link to={'/specialties'} className={"link"} reloadDocument >Specialties</Link></li>
                                <li className={"li1"}><Link to={'/reservation'} className={"link"} reloadDocument >Reservation</Link></li>
                                <li className={"li1"}><Link to={'/blog'} className={"link"} reloadDocument >Blog</Link></li>
                                <li className={"li1"}><Link to={'/about'} className={"link"} reloadDocument >About</Link></li>
                                <li className={"li1"}><Link to={'/contact'} className={"link"} reloadDocument >Contact</Link></li>
                            </ul>
                            :null}
                    <li className={"li"}><Link to={'/home'} className={"link"} reloadDocument >Home</Link></li>
                    <li className={"li"}><Link to={'/menu'} className={"link"} reloadDocument >Menu</Link></li>
                    <li className={"li"}><Link to={'/specialties'} className={"link"} reloadDocument >Specialties</Link></li>
                    <li className={"li"}><Link to={'/reservation'} className={"link"} reloadDocument >Reservation</Link></li>
                    <li className={"li"}><Link to={'/blog'} className={"link"} reloadDocument >Blog</Link></li>
                    <li className={"li"}><Link to={'/about'} className={"link"} reloadDocument >About</Link></li>
                    <li className={"li"}><Link to={'/contact'} className={"link"} reloadDocument >Contact</Link></li>
            </div>

        </ul>
    );
}

export default LinksPage;
