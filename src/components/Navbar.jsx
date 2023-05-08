import React from 'react';
import ".././styles.css/Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
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
