import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form, Label, FormGroup, Container } from 'reactstrap';
import api from '../../services/Api';

export default function FormCheckout() {
  const redirect = useNavigate();
  const [endereco, setEndereco] = useState('');
  const [numero, setNumber] = useState(0);
  const [identidade, setId] = useState(0);
  const user = JSON.parse(localStorage.getItem('user'));
  const total = localStorage.getItem('total');

  const handleInput = (target) => {
    const { name, value } = target;
    switch (name) {
    case 'endereco':
      setEndereco(value);
      console.log(endereco);
      break;
    case 'numero':
      setNumber(value);
      console.log(numero);
      break;
    case 'documento':
      setId(value);
      console.log(value);
      break;
    default:
    }
  };

  async function handleClick() {
    const cartItems = Object.values(JSON.parse(localStorage.getItem('cart')));
    console.log(user.id);
    try {
      await api.post('/signature/newSig', {
        userId: user.id,
        totalPrice: total,
        deliveryAddress: endereco,
        deliveryNumber: numero,
        document: identidade,
        cartItems,
      });
      redirect('/signatures');
      localStorage.setItem('cart', []);
    } catch (error) {
      throw new Error();
    }
  }

  // pegar valor dos inputs
  // salvar tudo como uma chave no localStorage

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label htmlFor="address">
            Endereço
            <Input
              required
              type="text"
              name="endereco"
              onChange={ (e) => handleInput(e.target) }
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="number">
            Número
            <Input
              required
              type="number"
              name="numero"
              onChange={ (e) => handleInput(e.target) }
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">
            Documento
            <Input
              required
              type="number"
              name="numero"
              onChange={ (e) => handleInput(e.target) }
            />
          </Label>
        </FormGroup>
      </Form>
      <Container>
        <Button
          type="button"
          color="success"
          onClick={ () => handleClick() }
        >
          Finalizar Assinatura
        </Button>
      </Container>
    </Container>
  );
}
