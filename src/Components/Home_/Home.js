import React from 'react'
import imagen from '../../Assets/prueba4_perfil.jpg'
import '../Home_/Home.css'


const Menu = () => {
  return (
   <header className='container_header'>
    <div className='header_texto'>
      <p className='nombre'>Ivonne David</p>
      <p className='profesion'> Web Developer </p>
      <div className='contenedor_descripcion_home'>
        <p className='descripcion_home'> Currently student of Software Analysis and Programming. </p>
      </div>
      <a href='../../Assets/Hoja de vida Ivonne David.pdf' download={'hoja_de_vida.pdf'}><button className='boton_curriculum'>CV</button></a>
    </div>
    <div className='header_img'>
      <img src={imagen}></img>
    </div>
   </header>
  )
}

export default Menu
