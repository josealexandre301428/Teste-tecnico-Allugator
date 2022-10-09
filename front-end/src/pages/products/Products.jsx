import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import api from '../../services/Api';
import NavBar from './components/NavBar';

export default function CustomProducts() {
  const [products, setProducts] = useState([]);
  const [showError, setError] = useState(false);
  const [valueState, setValue] = useState({});

  function makeProducts(product, index) {
    const { name, id, urlImage, price } = product;
    return (
      <Card
        key={ index }
        style={ {
          width: '18rem',
          marginTop: '6rem',
          marginBottom: '1rem',
          marginLeft: '1rem',
          marginRight: '1rem',
        } }
      >
        <img
          alt={ name }
          src={ urlImage }
          className="img-responsive imgSize img-fluid img-thumbnail"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
        <CardBody className="bodyCard text-center">
          <CardTitle
            tag="h5"
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            { name }
          </CardTitle>
          <CardText
            className="text-center"
          >
            { ` a partir de R$ ${price} por ano` }
          </CardText>
          <div className="cardButton">
            <Button
              color="success"
              className="w-100 p-3"
              name="sobre"
            >
              Sobre
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }

  const handleFetch = async () => {
    try {
      const product = await api.get('/products');
      console.log(product);
      setProducts(product.data);
      const nameMap = product.data.map(({ name, id, price }) => ({ name, id, price }))
        .reduce((acc, curr) => {
          acc[curr.name] = {
            name: curr.name,
            id: curr.id,
            price: curr.price,
            quantity: 0,
            subTotal: 0,
          };
          return acc;
        }, {});
      setValue(nameMap);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(valueState));
  }, [valueState]);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main>
      <NavBar />
      <div className="cardGroup">
        { showError
          ? null
          : products && products.map((product, index) => makeProducts(product, index)) }
      </div>
    </main>
  );
}
