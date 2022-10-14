import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import api from '../../services/Api';
import NavBar from '../products/components/NavBar';

export default function Signatures() {
  const [haveUser, setUser] = useState(false);
  const [signature, setSignatures] = useState([]);
  const [open, setOpen] = useState('1');
  const [deleteSign, setDelete] = useState(false);

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  async function handleClick(target) {
    const { id } = target;
    try {
      await api.delete(`/signature/delete/${id}`);
      setDelete(true);
    } catch (error) {
      throw new Error();
    }
  }

  const handleFetch = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const signatures = await api.get('/signature', { id: user.id });
      setSignatures(signatures.data);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('user'));
    if (!usuario) setUser(false);
    if (usuario) {
      setUser(true);
      handleFetch();
    }
  }, [deleteSign]);
  return (
    <main>
      <NavBar />
      { haveUser ? (
        <Container
          className="text-center"
          style={ {
            marginTop: '50px',
          } }
        >
          <h1
            className="display-5"
          >
            Minhas Assinaturas
          </h1>
          { signature.map((sig, index) => {
            const { id, totalPrice, signatureDate, products } = sig;
            const date = signatureDate.split('T')[0].split('-').reverse().join('/');
            return (
              <Accordion open={ open } key={ index } toggle={ toggle }>
                <AccordionItem>
                  <AccordionHeader
                    targetId="1"
                  >
                    {
                      `ID: ${id} | Data: ${date}`
                    }
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <strong>{` Preço: R$${totalPrice}`}</strong>
                    <ListGroup>
                      { products.map((prod) => (
                        <ListGroupItem key={ prod.id }>
                          {`Produto: ${prod.name} | Preço: ${prod.price} `}
                        </ListGroupItem>
                      ))}
                      <Button
                        color="danger"
                        id={ id }
                        onClick={ (e) => handleClick(e.target) }
                      >
                        Cancelar Assinatura
                      </Button>
                    </ListGroup>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            );
          })}
        </Container>
      ) : (
        <Container className="text-center bg-secondary p-2 text-dark bg-opacity-75">
          <h1>Faça login para continuar</h1>
          <Link to="/login">
            <Button color="success">
              Va para o login
            </Button>
          </Link>
        </Container>
      ) }
    </main>
  );
}
