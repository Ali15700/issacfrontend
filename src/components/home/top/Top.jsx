import React from 'react'
import './top.scss'
import {Link} from "react-router-dom";

export default function Top() {
  return (
    <div>

        <div className="container top-div mb-4">
            <div className="left">
            <button class="btn"><i class="fa fa-home"></i> Filter By</button>
            </div>
            <div className="right">
            <button class="btn" >
            <i class="fa fa-home"></i> <Link to="/quality" className="tqm">TQM</Link></button>
            </div>
        </div>

    </div>
  )
}
