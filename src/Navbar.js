import React from 'react';

const styles = {
  nav: {
    backgroundColor: '#38A169', // Verde oscuro de chef
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  logo: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  linkItem: {
    marginLeft: '30px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.1em',
    transition: 'color 0.3s',
  }
};

function Navbar() {
  return (
    <nav style={styles.nav}>
      
      <a href="/" style={styles.logo}>Chef App</a>

      <ul style={styles.links}>
        <li style={styles.linkItem}>
          <a href="/" style={styles.link}>Recetas</a>
        </li>
        <li style={styles.linkItem}>
          <a href="/login" style={styles.link}>Ingresar</a>
        </li>
        <li style={styles.linkItem}>
          <a href="/about" style={styles.link}>Acerca de</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
