import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavLink,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';

export default function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));

  const redirect = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('user');
    redirect('/login');
  };
  return (
    <header
      className="navi fixed-top bg-success"
      style={ {
        marginBottom: '1rem',
      } }
    >
      <Nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavItem className="navItem">
            <NavLink
              className="text-white"
              href="/products"
            >
              Produtos
            </NavLink>
          </NavItem>
          <NavItem className="navItem">
            <NavLink
              className="text-white hoverable"
              href="/signatures"
            >
              Minhas Assinaturas
            </NavLink>
          </NavItem>
          <NavbarText
            className="text-white hoverable"
          >
            { user.name }
          </NavbarText>
          <NavItem className="navItem">
            <NavLink
              className="text-danger hoverable"
              href="/"
              onClick={ handleLogOut }
            >
              Sair
            </NavLink>
          </NavItem>
        </div>
      </Nav>
    </header>
  );
}
