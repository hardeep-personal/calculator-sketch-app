import React, { useState } from 'react'
import Screen from '../screen/screen'
import Button from '../button/button'
import './layout.css'

const Layout = () => {
    const [answer, setAnswer] = useState('')
    console.log("answer from layout", answer)
    // our method to handle all click events from our buttons
const orange = '#f3a551';
    
    function handleClick(inputValue) {
        console.log("from layout", inputValue);
        setAnswer(answer + inputValue);
        

      
    }

    const calc = () => {
        setAnswer(eval(answer.toString()))
    }



    return (
        <div className='main-calc-container'>
            <div className="mainCalc">
                <Screen answer={answer} />
               
                <div className="button-row d-flex">
                    <Button label={"7"} handleClick={handleClick}
                    />
                    <Button label={"8"} handleClick={handleClick}
                    />
                    <Button label={"9"} handleClick={handleClick}
                    />
                    <Button label={"/"} handleClick={handleClick}
                    />
                </div>
                <div className="button-row d-flex">
                    <Button label={"4"} handleClick={handleClick}
                    />
                    <Button label={"5"} handleClick={handleClick}
                    />
                    <Button label={"6"} handleClick={handleClick}
                    />

                    <Button label={"*"} handleClick={handleClick}
                    />
                </div>
                <div className="button-row d-flex">
                    <Button label={"1"} handleClick={handleClick}
                    />
                    <Button label={"2"} handleClick={handleClick}
                    />
                    <Button label={"3"} handleClick={handleClick}
                    />
                    <Button label={"-"} handleClick={handleClick}
                    />

                </div>
                <div className="button-row d-flex">
                    <Button label={"0"} handleClick={handleClick}
                    /> 
                    <Button label={"."} handleClick={handleClick}
                    />
                     <Button label={"+"} handleClick={handleClick}
                    />
                    <Button label={"="} backgroundC={orange} handleClick={calc}
                    />
                </div>
            </div>
        </div>
    )
}

export default Layout