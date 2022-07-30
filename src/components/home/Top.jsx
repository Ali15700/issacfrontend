import React from 'react'
import './top.scss'
import {useHistory} from "react-router-dom";

export default function Top() {
  
  let history = useHistory();
 
  return (
    <div>

        <div className="container top-div mb-4">
            <div className="left">
            <button class="btn"><i class="fa fa-home"></i> Filter By</button>
            </div>
            <div className="right">
            <button class="btn" onClick={()=> {history.push("/quality");}}>
            <i class="fa fa-home"></i> TQM</button>
            </div>
        </div>

    </div>
  )
}
