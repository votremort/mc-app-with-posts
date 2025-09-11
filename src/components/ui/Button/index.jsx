import React from "react";
import * as SC from "./styles"

export const Button = ({ type, text, attentStyle = false, onClick, disabled }) => {
  return (
    <SC.Button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      attentStyle={attentStyle}
    >
      {text}
    </SC.Button>
  )
}