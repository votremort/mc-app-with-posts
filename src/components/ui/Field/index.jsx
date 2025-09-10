import React from "react";

export const Field = ({ children, ...rest }) => {
  return(
    <div {...rest}>{children}</div>
  )
}