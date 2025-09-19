import React from "react";
import searchLogo from '../assets/search.svg'

function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <h1 className="trademark">🗿Shupi</h1> 
        </div>
        <div className="navbar-center">        
        {/* I didnt actually put any functionality in this button since the stuff gets loaded in already as you type along */}
            <img src={searchLogo} alt="Search" className="search-icon"/> 
            <input
            type="text"
            placeholder="SEARCH PRODUCTS IN [INSERT NAME HERE] YEAH!!!!"
            className="nav-searchbox"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="navbar-right">
            <h1>🛒</h1>
        </div>
    </nav>
  );
}

export default NavBar;