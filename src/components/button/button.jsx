import React from 'react'
import './button.css'
const Button = (props) => {
    const { label, handleClick,backgroundC } = props;
    const sendValue=(e)=>{
        // console.log(e)
        handleClick(e)
    }
    return (
        <input type="button" className='button' style ={{ backgroundColor:backgroundC ?'#f3a551':' ', color:backgroundC ?'#fff':' '}} value={label} onClick={(e) => sendValue(e.target.value)} />
    )
}

export default Button