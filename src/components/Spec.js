import React from 'react';
import spec from '../data/spec.json'
import open from "../data/open.json";

function Spec(props) {
    return (
        <div>
            <div className={"m1"}>
                <div className={"m2"}>
                    {spec.map((item) => (
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
        </div>
    );
}

export default Spec;