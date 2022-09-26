import React, {useState, useEffect} from "react";
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Info from '../Pages/Info';

function FetchData(){
    var tempid = -1
    const [doginfo, setdoginfo] =  useState([])

    useEffect(() => {
        axios.get('https://api.jsonbin.io/v3/b/630ddba7a1610e6386154bf5/')
        .then(res => {

            setdoginfo(res.data.record)
            console.log(res.data.record[1])
        })
    }, [])
    return (
        <div>
            {doginfo.map(doginfo => (
                <Link to={{pathname: `/Info/${tempid = tempid + 1}`}}>           
                    <ul className="fetchul" key={doginfo.id}>
                        <img className='dogimg' src={`${doginfo.img}`} alt="" width="40%" height="auto"/> 
                        <p className="font1">Name : {doginfo.name} <br />
                         Breed : {doginfo.breed} <br />
                          Chip Number : {doginfo.chipNumber}<br />
                          Phone Number : {doginfo.owner.phoneNumber}<br />
                          Dogs ID : {tempid}
                        </p>
                    </ul>
                </Link>
                ))}
            
        </div>
    )
}
export default FetchData