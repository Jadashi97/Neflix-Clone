import React, { useEffect, useState } from 'react';
import ".././styles.css/Navbar.css"

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(()=>{

    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        handleShow(true);
      }else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, [])


  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
          className='nav_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/300px-Netflix_2014_logo.svg.png?20140810085105'
          alt='netlix logo'
        />
        <img
          className='nav_avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png'
          alt='avatar logo'
        />
    </div>
  )
}

export default Navbar;
