import React from 'react'
import '../SobreMi/SobreMi.css'
import imagenSobreMi from '../../Assets/prueba2_perfil.jpg'

function SobreMi() {
  return (
   <section className='container_sobremi' id='SobreMi'>
    <div className='contenedor_img_sobre_mi'>
      <img src={imagenSobreMi}></img>
    </div>
    <div className='contenedor_info_SMI'> <h3 className='titulo_sobremi'>About Me</h3>
        <p className='description_sobremi'>I'm Ivonne David, Software Analysis and Programming student.</p>
        <section>
          <p className='parrafos_sobremi'>Passionate Developer: Lover of programming and creation. My goal is to turn ideas into attractive and functional digital solutions.</p>
          <p className='parrafos_sobremi'>My Approach: I believe in the power of technology to solve problems. Always looking for elegance in the code and usability in the design.</p>
          <p className='parrafos_sobremi'>Beyond the code: When I'm not programming, I love exercising, watching series, movies or simply going out to entertain myself.     
                                          ¡The balance between the digital and real world is key!</p>
        </section></div>
   </section>
  )
}

export default SobreMi
