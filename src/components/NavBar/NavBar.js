import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './NavBar.css';
import lesLogo from "./../images/les.png";



export default function NavBar() {

  
  return (
  <nav className="nav">
      <Link to="/" className="logo-name">
      <img src={lesLogo} alt="" width="80px" height="33px" className="img_logo"/>
      <div className="site-title">Leading Edge Simulations</div>
      </Link>
      <ul>
        <CustomLink to="/products">Products</CustomLink>
        <CustomLink to="/support">Support</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>

  </nav>
  );
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
}
