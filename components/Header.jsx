import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Header({theme}) {

  const [dark, setdark] = theme;

  return (
    <header className={`header-container ${dark ? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title">
          <Link to="/">Where in the world?</Link>
        </h2>
        <p className="theme-changer" onClick={() => {
          setdark(!dark);
          localStorage.setItem('isDark', !dark);
        }
        }>
          <i className={`fa-regular fa-${dark ? 'moon' : 'sun'}  &nbsp;&nbsp`} />
         {dark ? "Dark" : "light"} Mode
        </p>
      </div>
    </header>
  )
}
