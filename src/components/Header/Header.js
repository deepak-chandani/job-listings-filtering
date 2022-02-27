import React from "react";
import "./Header.scss"

function Header({children=null}){
  return (
    <header>{children}</header>
  )
}

export default Header