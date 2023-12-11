import React from 'react'

const Square = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section className='square'
       style={
        {backgroundColor : colorValue,
         color : isDarkText? "#000" :"#fff"
        
        }
       }>
        <p>{colorValue? colorValue : "Emty Value"}</p>
        <p>{hexValue? hexValue: null} </p>
       </section>
   
  )
}

Square.defaultProps = {
    colorValue : "Empty Color value"
}

export default Square