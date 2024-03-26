import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'; 

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="Company Logo" style={logoStyle} />
      </div>

      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}><Link to="/">Home</Link></li>
          <li style={liStyle}><Link to="/products">Products</Link></li>
          <li style={liStyle}><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <div style={companyNameStyle}>
        Hustlers
      </div>
    </header>
  );
}

// Inline styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between', 
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #ccc',
};

const logoContainerStyle = {
  flex: 1, 
  display: 'flex',
  alignItems: 'center', 
};

const logoStyle = {
  height: '80px',
};

const companyNameStyle = {
  flex: 1, 
  display: 'flex',
  justifyContent: 'flex-end', 
  fontSize: '18px',
  alignItems: 'center', 
};

const navStyle = {
  flex: 2, 
  display: 'flex',
  justifyContent: 'center', 
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: '0 10px',
};

export default Header;
