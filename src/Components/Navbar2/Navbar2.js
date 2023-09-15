import React from 'react'
import '../Navbar2/Navbar2.css'
import logo from '../../Assets/logodos.png'

function Navbar2() {
  return (
    <header className='header'>
        <div className='logo'>
            <img src={logo}></img>
        </div>
        <nav>
            <ul className='nav_links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#SobreMi'>About Me</a></li>
            <li><a href='#Skills'>Skills</a></li>
            <li><a href='#proyectos'>Projects</a></li>
            </ul>
        </nav>
        <a href='#Footer' className='btn'><button>Contacts</button></a>
    </header>
  )
}

export default Navbar2
