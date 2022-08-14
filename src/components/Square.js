import React from 'react'

const Square = ({value, onClick}) => {
  return (
    <button style = {{
        background: "green",
        border: "2px solid darkblue",
        fontSize: "30px",
        fontWeight: "800",
        cursor: "pointer",
        outline: "none",
        color:'white'
    }
    } onClick={onClick}>{value}</button>
  )
}

export default Square