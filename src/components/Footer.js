import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <nav className="text-center my-13 navbar-light bg-dark">
          <Link to="/about"  style={{color:"white"}}>Designed by Mudit</Link>
      </nav>
    </div>
  );
}
