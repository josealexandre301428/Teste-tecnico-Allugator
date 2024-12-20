import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';
import NavBar from '../products/components/NavBar';
import FormCheckout from './FormCheckout';

export default function Checkout() {
  const [haveUser, setUser] = useState(false);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const totalPrice = (prod) => {
    let totalValue = 0;
    prod.forEach((value) => {
      totalValue += Number(value.price);
    });
    localStorage.setItem('total', JSON.stringify(totalValue));
    setTotal(totalValue);
  };

  const getProductsStorage = () => {
    const productsStorage = JSON.parse(localStorage.getItem('cart'));
    const arrayProducts = Object.values(productsStorage);
    totalPrice(arrayProducts);
    return setProducts(arrayProducts);
  };

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('user'));
    getProductsStorage();
    if (!usuario) setUser(false);
    if (usuario) setUser(true);
  }, []);
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
            className="display-1"
          >
            Finalize sua compra
          </h1>
          <Table responsive>
            <thead>
              <tr className="d-flex text-center">
                <th className="p-2 flex-fill">
                  Id
                </th>
                <th className="p-2 flex-fill">
                  Nome
                </th>
                <th className="p-2 flex-fill">
                  Preço
                </th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((item, index) => (
                  <tr
                    className="d-flex text-center"
                    key={ index }
                  >
                    <td className="p-2 flex-fill">
                      { index + 1 }
                    </td>
                    <td className="p-2 flex-fill">
                      { item.name }
                    </td>
                    <td className="p-2 flex-fill">
                      { item.price }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          <Container>
            <h5>{`Total a pagar R$ ${total}`}</h5>
          </Container>
          <FormCheckout />
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
