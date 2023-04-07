import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate=useNavigate();
    const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
)});

        return (
            <nav>
            <ul className='Navi'>
            <li className='nav-link' onClick={()=>{navigate("/")}} id="home">Home</li>
            <li className='nav-link' onClick={()=>{navigate("/about")}}   id="about">About</li>
            <li className='nav-link' onClick={()=>{navigate("/education")}}   id="education">Eductaion</li>
            <li  className='nav-link' onClick={()=>{navigate("/skills")}}   id="skills">Skills</li>
            <li className='nav-link' onClick={()=>{navigate("/contact")}}   id="contact">Contact</li>
            </ul>
            </nav>
            )
        }
    
    export default Navbar
    