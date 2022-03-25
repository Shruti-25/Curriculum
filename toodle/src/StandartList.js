import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const StandardList =(props) =>{
  const [style, setStyle] = useState("li");
const right=()=>{
  const a=document.getElementById('setl');
  a.style.marginLeft='40px';
}
const left=()=>{
  const a=document.getElementById('setl');
  a.style.marginLeft='0px';
}
 
    return (
        <>
        <table>
        <tr>    <td>     <span id="setl"><button className="btn2" onClick={()=>{props.onSelect(props.id);}}><FontAwesomeIcon icon={faCircleMinus}></FontAwesomeIcon></button>&nbsp;&nbsp;
          <span><button onClick={right}><FontAwesomeIcon icon={faArrowRight} className="bnn"></FontAwesomeIcon></button></span>&nbsp;&nbsp;
          <span><button onClick={left} className="bnn"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button></span>

          </span>
          </td>
          <td>
            <li className="setText">{props.text}</li>
            </td>
            </tr>

            </table>
        </>
   )

}
export default StandardList;