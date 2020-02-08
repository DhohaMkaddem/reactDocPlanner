import React from 'react'
import mio from '../asserts/mio.png'
import './BrandSection.css'


export default function BrandSection() {
  return (
    <div id={"part3"}>
      <div id={"titre2"}><h1>We are a global company with local culture</h1></div>
     
     <div id={"listelogo"}>
     <ul>
        <li><img src = {mio} alt={"listbrand"}/></li>
        <li><img src = {mio} alt={"listbrand"}/></li>
        <li><img src = {mio} alt={"listbrand"}/></li>
        <li><img src = {mio} alt={"listbrand"}/></li>
        <li><img src = {mio} alt={"listbrand"}/></li>
        
      </ul>
      </div>
    </div>
  )
}
