
import React from 'react'

export const Button = ({text,funcion}) => {
  return (
    <button onClick={funcion}>{text}</button>
  )
}
