import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  const liStyle = {
    alignItems: 'center',
    display: 'flex',
    padding: '0 1em',
    color: 'white'
  }
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  }
  return ( 
    <>
      <footer className='footer' style={{display: 'flex', backgroundColor: '#023047', padding: '1em 0', width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: 'auto', maxWidth: '1170px'}}>
          <ul style={{display: 'flex', margin: '0', padding: '0'}}>
            <li style={liStyle}>
              <Link style={linkStyle} to='#'>Contacts</Link>
            </li>
            <li style={liStyle}>
              <Link style={linkStyle} to='#'>Terms of use</Link>
            </li>
            <li style={liStyle}>
              <Link style={linkStyle} to='#'>Privacy policy</Link>
            </li>
            <li style={liStyle}>
              Api provided by &nbsp;
              <a style={linkStyle} href='https://www.numbeo.com/cost-of-living/'>numbeo</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
   );
}

export default Footer;