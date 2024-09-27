import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
         <Logo />
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">

        <Link to="/" className="py-2 text-gray-700 font-bold hover:text-gray-500">
  Home
</Link>
<Link to="/aboutus" className="py-2 text-gray-700 font-bold hover:text-gray-500">
  About
</Link>
<Link to="/product" className="py-2 text-gray-700 font-bold hover:text-gray-500">
  Product
</Link>
<Link to="/contact" className="py-2 text-gray-700 font-bold hover:text-gray-500">
  Contact
</Link>
<Link to="/source" className="py-2 text-gray-700 font-bold hover:text-gray-500">
  Source
</Link>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        © 2024 BarudakBojongsoang. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
