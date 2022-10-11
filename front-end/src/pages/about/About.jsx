import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import NavBar from '../products/components/NavBar';

export default function About() {
  const [especifcProd, setEspecifc] = useState({});
  const [load, setLoad] = useState(false);
  const params = useParams();

  const getProductsStorage = async () => {
    const productsStorage = JSON.parse(localStorage.getItem('products'));
    const arrayProducts = Object.values(productsStorage);
    const filter = arrayProducts.filter((value) => value.id === Number(params.id));
    setEspecifc(filter);
    setLoad(true);
  };

  useEffect(() => {
    getProductsStorage();
  }, []);

  return (
    <main>
      <NavBar />
      <Container>
        { load
          ? <h1>{ especifcProd[0].name }</h1> : null }
      </Container>
    </main>
  );
}
