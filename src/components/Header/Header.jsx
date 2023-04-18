import React, {useRef} from 'react'
import {Container} from 'reactstrap';
import './Header.css';


const navLinks = [
    {
        display: 'Home',
        url:'#'
    },
    {
        display: 'About Us',
        url:'#'
    },
    {
        display: 'Features',
        url:'#'
    },
    {
        display: 'Courses',
        url:'#'
    },
    {
        display: 'Free Course',
        url:'#'
    },

]

const Header = () => {
    const menuRef = useRef()
    const menuToggle = () => menuRef.current.classList.toggle('active_menu')
  return (
  <header className='header'>
    <Container>
        <div className="navigation d-flex align-item-center justify-content-between">
            <div className="logo mt-3">
                <h2 className='d-flex align-item-center'><i class="ri-pantone-line"></i>Education</h2>
            </div>
            <div className="nav d-flex align-item-center gap-5">
                <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
                    <ul className="nav_list">
                        {
                            navLinks.map((item,index)=>(
                            <li key={index} className="nav_items">
                           <a href={item.url}>{item.display}</a>
                        </li>

                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="mobile_menu">
                <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
            </div>
        </div>
    </Container>
  </header>
  )
}

export default Header
