import React from 'react';

function Header(props) {
  return (
      <header className="header">
        <div className="logo-container">
            <img className='logo' alt="logo" src={props.logo}/>
        </div>
        <h1 className="title hide-for-mobile">{props.title}</h1>
        <h1 className="titleMobile hide-for-desktop">{props.titleMobile || props.title}</h1>
      </header>
  );
}

export default Header;