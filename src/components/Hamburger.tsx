import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
export default function Hamburger() {
    const [clicked, setClicked] = useState(false)
  return (
    <div>
        {!clicked ? <CiMenuFries onClick={() => setClicked(!clicked)}/> : <CgClose onClick={() => setClicked(!clicked)}/>}
    </div>
  )
}
