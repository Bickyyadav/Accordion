/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react";

const FAQ = ({ curData ,onToogle  , isActive}) => {

    const { question, answer } = curData;
   

    return (
        <li >
            <div className="accordion-grid">
                <p>{question}</p>
                <button  className={isActive?"active-btn": ""} onClick={onToogle}>{isActive ? "Close": "Show"}</button>
            </div>
            <p>{isActive && answer}</p>
        </li>
    )
}


export default FAQ