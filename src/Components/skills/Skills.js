import React from 'react'
import '../skills/Skills.css'
import { Button } from '@mui/material'

const Skills = ({logoP,texto}) => {
  return (  
      <section>
        <div className='container_cards'>
        <img src={logoP}></img>
       <h1 className='titulo_Cards'>{texto}</h1>
        </div>
      </section>
  )
}

export default Skills
