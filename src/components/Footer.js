import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#343a40', // Color del header (oscuro)
        color: '#fff', // Texto en blanco
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} My Platform. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
