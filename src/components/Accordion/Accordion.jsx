import {useState} from 'react'
import './Accordion.css'

export default function Accordion({title, text}){

    const [isActive, setIsActive] = useState(false)

    return(
        <>
        <div className="container">
        <div className="acc-content">
            <div onClick={()=> setIsActive(!isActive)} className="acc-title">
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive &&
                <div className="acc-text">{text}</div>
            }
        </div>
        </div>
        </>
    )
}