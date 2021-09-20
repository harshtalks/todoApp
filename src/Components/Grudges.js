import React from 'react'
import Grudge from './Grudge'

const Grudges = ({data, toggleForgiveness}) => {
    return (
        <div className = "Grudges">
        {data.map(el => {
            return <Grudge key = {el.id}
             data = {el} 
             toggleForgiveness = {toggleForgiveness}
             />
        })}
        </div>
    )
}

export default Grudges
