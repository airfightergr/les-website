import React, {ReactNode, FC} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './NavBar.css';
const lesLogo = require("./../images/les.png");

interface CustomLinkProps {
  to: string;
  children: ReactNode;
}

interface NavBarProps {
  className?: string;
}

export default function NavBar({className}: NavBarProps) {
  
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

function CustomLink({to, children, ...props}: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
}

