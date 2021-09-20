import React from 'react'

const Grudge = ({data, toggleForgiveness}) => {
    const forgive = () => toggleForgiveness(data.id)
    return (
        <div className = "grudge">
          <h2>{data.Name}</h2>
          <p>{data.Crime}</p>
          <div className="check">
              <label >Forgive Maybe?</label>
              <input type="checkbox" checked = {data.isForgiven} onChange = {forgive}/>
          </div>
        </div>
    )
}

export default Grudge
