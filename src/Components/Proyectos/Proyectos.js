import React from 'react'
import '../Proyectos/Proyectos.css'

function Proyectos(props) {
  return (
    <>
    <section className='contenedor_proyectos'>
            <div className='contenedor_img_proyects'>
              <img className='imgs_proyecto' src={props.imgsP}></img>
            </div>
            <div className='contenedor_descripcion_proyects'>
              <h1 className='titulo_pagina'>{props.titulo_pagina}</h1>
              <p className='descripcion_proyectos'>{props.descripcion}</p>
              <h2>Languages</h2>
            <div className='contenedor_leng_utili'>
              <img className='imgs_leng_utilizados' src={props.imgsH}></img>
              <img className='imgs_leng_utilizados' src={props.imgsC}></img>
              <img className='imgs_leng_utilizados' src={props.imgsJ}></img>
            </div>
            <a  className='boton_ver_mas' href={props.enlace} target='_blank'><button>{props.verProyecto}</button></a>
            </div>
    </section>
    </>
    
  )
}

export default Proyectos
