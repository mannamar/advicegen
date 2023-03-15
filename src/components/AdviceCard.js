import divider from '../assets/images/pattern-divider-desktop.svg';
import mobileDivider from '../assets/images/pattern-divider-mobile.svg';
import dice from '../assets/images/icon-dice.svg';
import React, { useState, useEffect } from 'react';

export default function AdviceCard() {

    useEffect( () => {
        // handleClick();
    }, [])
    const [idTxt, setIdTxt] = useState('117');
    const [advice, setAdvice] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action.");
    async function handleClick() {
        console.log("catfacts");
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const nextId = data.slip.id;
        setIdTxt(nextId);
        const nextAdvice = data.slip.advice;
        setAdvice(nextAdvice);
    }

    return (
        <div className="card flex flex-col items-center">
            <p className="title">ADVICE #{idTxt}</p>
            <div className="innerCard flex flex-col justify-center items-center">
                <p className="quote">“{advice}”</p>
                <picture>
                    <source media="(max-width:700px)" srcset={mobileDivider} />
                    <img src={divider} alt="Divider" className='divImg'/>
                </picture>
                {/* <img src={divider} alt="divider" className='divImg'/> */}
            </div>
            <div className="spacer"></div>
            <div onClick={handleClick} className="diceBtn flex justify-center items-center">
                <img src={dice} alt="dice" className=''/>
            </div>
        </div>
    )
}