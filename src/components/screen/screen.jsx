import React from 'react'
import './screen.css'

const Screen = (props) => {
    const { answer } = props;

    return (
        <>
            <input type='text' className="screen" value={answer} readOnly  /> 
        </>
    )
}

export default Screen