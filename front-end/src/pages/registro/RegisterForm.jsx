import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button, Alert, Container } from 'reactstrap';
import UserContext from '../../context/user/context';
import api from '../../services/Api';
import { validateFields } from '../../services/validateLogin';

function RegisterForm() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setError] = useState(false);

  const redirect = useNavigate();

  const handleSubmit = async () => {
    try {
      const login = await api.post('/register', { name, email, password });
      setUser(login);
      localStorage.setItem('user', JSON.stringify(login.data));
      await redirect('/products');
    } catch (error) {
      setError(true);
    }
  };
  const warning = (
    <Alert
      className="alert"
      color="danger"
    >
      Usuario já existe
    </Alert>);
  return (
    <main
      className="loginMain container row col-xs-12 col-sm-12 col-md-12 col-lg-12"
    >
      <div className="titleDiv">
        <h1 className="title">Cadastre-se</h1>
      </div>
      <Container className="container text-center">
        <Form>
          <FormGroup>
            <Label for="name">
              Nome
            </Label>
            <Input
              onChange={ ({ target: { value } }) => setName(value) }
              name="name"
              placeholder="Nome"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">
              Email
            </Label>
            <Input
              onChange={ ({ target: { value } }) => setEmail(value) }
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">
              Senha
            </Label>
            <Input
              onChange={ ({ target: { value } }) => setPassword(value) }
              name="password"
              placeholder="Senha"
              type="password"
            />
          </FormGroup>
          <div className="row">
            <Button
              color="success"
              className="container-flex align-items-center"
              disabled={ validateFields(name, email, password) }
              onClick={ handleSubmit }
              type="button"
            >
              Cadastrar
            </Button>
          </div>
        </Form>
      </Container>
      { showError ? warning : null }
    </main>
  );
}

export default RegisterForm;
