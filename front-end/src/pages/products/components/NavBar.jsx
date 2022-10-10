import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavLink,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';

export default function NavBar() {
  const [haveUser, setUser] = useState(false);

  const redirect = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('user');
    redirect('/login');
  };

  const logOut = (
    <NavItem className="navItem">
      <NavLink
        className="text-danger hoverable"
        href="/"
        onClick={ handleLogOut }
      >
        Sair
      </NavLink>
    </NavItem>
  );

  const logIn = (
    <>
      <Button
        className="text-white hoverable"
        color="success"
        onClick={ () => redirect('/login') }
        type="button"
      >
        Login
      </Button>
      <Button
        className="text-white hoverable"
        color="success"
        onClick={ () => { redirect('/register'); } }
        type="button"
      >
        Registrar
      </Button>
    </>
  );

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('user'));
    if (usuario) setUser(true);
    if (!usuario) setUser(false);
  });
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-success static-top"
      style={ {
        marginBottom: '1rem',
      } }
    >
      <Nav className=" container navbar navbar-expand-lg">
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
        { haveUser ? logOut : logIn }
      </Nav>
    </nav>
  );
}
