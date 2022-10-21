import React, { useState } from 'react';



const Month = ({handleMonthClick, digit, nowActive}) => {
    

    const active_style = {
        background: 'orange',
        color: '#D30176',
    }
    const standard_style = {
        background: 'rgb(255, 240, 197)',
        color: '#000E5A',
    }

    return (
        <>
           <h5 id={digit} onClick={handleMonthClick} style={nowActive == digit ? active_style : standard_style}>{digit}</h5> 
        </>
    )
}

export default Month;
