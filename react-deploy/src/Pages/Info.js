import "../App.css";
import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


function Info(){
  const [thedog, setThedog] =  useState([])
  const [theowner, setowner] =  useState([])
  const { id } = useParams();
  useEffect(() => {
    axios.get('https://api.jsonbin.io/v3/b/630ddba7a1610e6386154bf5/')
    .then(res => {
      setThedog(res.data.record[id])
      console.log(res.data.record[id])
      setowner(res.data.record[id].owner)
      console.log(res.data.record[id].owner)

    })
}, [])
  return (
    <div className="bigbox">
      <div className="imgbox">
        <img className="dogimgbox" src={`${thedog.img}`}></img> <br/>
      </div>
      <div className="dogbox">
        <div className="dogtitle">Dog Details</div><br/>
        <div>Name : {thedog.name}</div> <br/>
        <div>Age : {thedog.age}</div> <br/>
        <div>Breed : {thedog.breed}</div> <br/>
        <div>Chipnumber : {thedog.chipNumber}</div> <br/>
        <div>Sex : {thedog.sex}</div> <br/>
      </div>
      <div className="ownerbox">
        <div className="ownertitle">Owner Details</div><br/>
        <div>Name : {theowner.name} {theowner.lastName}</div> <br/>
        <div>Phone Number : {theowner.phoneNumber}</div> <br/>
      </div>
    </div>
  );
};
export default Info;