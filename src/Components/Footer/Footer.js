import React from 'react'
import '../Footer/Footer.css'
import fb from '../../Assets/CSS_LOGO2.png'

function Footer() {
  return (
   <div id='Footer' className='footer'>
      <div className='sb_footer section_padding'>
          <div className='sb_footer-links'>
              <div className='sb_footer-links_div'>
                <h4>For business</h4>
                <a href='/employer'>
                  <p>Employer</p>
                </a>
                <a href='/healthplan'>
                  <p>Health Plan</p>
                </a>
                <a href='/individual'>
                  <p>individual</p>
                </a>
              </div>
              <div className='sb_footer-links_div'>
                <h4>Resources</h4>
                <a href='/resource'>
                  <p>Resource center</p>
                </a>
                <a href='/resource'>
                  <p>Testimonials</p>
                </a>
                <a href='/resource'>
                  <p>STV</p>
                </a>
              </div>
              <div className='sb_footer_links_div'>
                <h4>Partners</h4>
                <a href='/employer'>
                  <p>Swing Tech</p>
                </a>
              </div>
              <div className='sb_footer-links_div'>
                <h4>Company</h4>
                <a href='/about'>
                  <p>About</p>
                </a>
                <a href='/press'>
                  <p>Press</p>
                </a>
                <a href='/career'>
                  <p>Career</p>
                </a>
                <a href='/contact'>
                  <p>Contact</p>
                </a>
              </div>
              <div className='sb_footer-links_div'>
                <h4>Coming soon on</h4>
                <div className='socialmedia'>
                  <p><img src={fb}></img></p>
                  <p><img src={fb}></img></p>
                  <p><img src={fb}></img></p>
                  <p><img src={fb}></img></p>
                </div>
              </div>
          </div>

        <hr></hr>

        <div className='sb_footer-below'>
          <div className='sb_footer-copyright'>
            <p>
              @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
          </div>
          <div className='sb_footer-below-links'>
              <a href='/terms'><div><p>Terms & Conditions</p></div></a>
              <a href='/Privacy'><div><p>Privacy</p></div></a>
              <a href='/Security'><div><p>Security</p></div></a>
              <a href='/Cookie'><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>

      </div>
   </div>
  )
}

export default Footer
