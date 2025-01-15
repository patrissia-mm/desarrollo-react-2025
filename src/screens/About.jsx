import React from 'react'
import { useSelector } from 'react-redux'
import {useState} from 'react'

const About =()=>{
    const product = useSelector((state) => state.product.value)
    const [ nameComponent, setNameComponent ] = useState('About')
    return(
        <>
            <h1>About</h1>
            <p>Component name: {nameComponent}</p>
            <button onClick={() => {setNameComponent('Curso de React')}}>Press</button>
        </>
    )
}

export default About

