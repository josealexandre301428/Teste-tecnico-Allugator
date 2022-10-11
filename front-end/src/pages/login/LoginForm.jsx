import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button, Alert, Container } from 'reactstrap';
import UserContext from '../../context/user/context';
import api from '../../services/Api';
import { validateLogin } from '../../services/validateLogin';

export default function LoginForm() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setError] = useState(false);

  const warning = (
    <Alert
      className="alert"
      color="danger"
    >
      Usuário ou senha incorretos!
    </Alert>);

  const redirect = useNavigate();

  const handleSubmit = async () => {
    try {
      const login = await api.post('/login', { email, password });
      setUser(login);
      localStorage.setItem('user', JSON.stringify(login.data));
      redirect('/products');
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('user'));
    if (usuario) redirect('/products');
  }, []);

  return (
    <main
      className="loginMain container row col-xs-12 col-sm-12 col-md-12 col-lg-12"
    >
      <div className="titleDiv">
        <h1 className="title">Teste Técnico Allugator</h1>
      </div>
      <Container className=" text-center ">
        <Form>
          <FormGroup>
            <Label for="email">
              Email
            </Label>
            <Input
              required
              onChange={ ({ target: { value } }) => setEmail(value) }
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">
              Password
            </Label>
            <Input
              required
              onChange={ ({ target: { value } }) => setPassword(value) }
              name="password"
              placeholder="Password"
              type="password"
            />
          </FormGroup>
          <div className="row">
            <Button
              className="col align-self-start"
              color="success"
              disabled={ validateLogin(email, password) }
              onClick={ handleSubmit }
              type="button"
            >
              Login
            </Button>
            <Button
              outline
              className="col align-self-center"
              color="success"
              onClick={ () => { redirect('/register'); } }
            >
              Ainda não tenho conta
            </Button>
          </div>
        </Form>
      </Container>
      { showError ? warning : null }
    </main>
  );
}
