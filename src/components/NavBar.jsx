import React from "react";

function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <h1 className="logo">🗿Shupee</h1> 
        </div>
        <div className="navbar-center">        
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