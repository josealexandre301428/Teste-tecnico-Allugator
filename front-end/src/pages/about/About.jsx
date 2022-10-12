import React, { useEffect, useState } from 'react';
import { Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';
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

  const makePage = (prod) => {
    const { name, price, urlImage, infoProduct } = prod[0];
    return (
      <div>
        <Container className="text-center">
          <h1 className="display-1">{ name }</h1>
          <p>{ infoProduct.armazenamento }</p>
        </Container>
        <Container className="d-flex justify-content-center align-items-center">
          <img
            alt={ name }
            src={ urlImage }
            className="img-responsive imgSize img-fluid"
          />
          <h5>{`Apenas R$ ${price}`}</h5>
        </Container>
        <h3>Informações do Produto</h3>
        <Container className="d-flex justify-content-center ">
          <Card
            style={ {
              width: '18rem',
            } }
          >
            <CardBody>
              <CardTitle tag="h5">
                Marca
              </CardTitle>
              <CardText>
                { infoProduct.marca }
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={ {
              width: '18rem',
            } }
          >
            <CardBody>
              <CardTitle tag="h5">
                Tela
              </CardTitle>
              <CardText>
                { infoProduct.tela }
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={ {
              width: '18rem',
            } }
          >
            <CardBody>
              <CardTitle tag="h5">
                Processador
              </CardTitle>
              <CardText>
                { infoProduct.processador }
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={ {
              width: '18rem',
            } }
          >
            <CardBody>
              <CardTitle tag="h5">
                Câmera Frontal
              </CardTitle>
              <CardText>
                { infoProduct.cameraFrontal }
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={ {
              width: '18rem',
            } }
          >
            <CardBody>
              <CardTitle tag="h5">
                Câmera Traseira
              </CardTitle>
              <CardText>
                { infoProduct.cameraTraseira }
              </CardText>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  };

  useEffect(() => {
    getProductsStorage();
  }, []);

  return (
    <main>
      <NavBar />
      <Container>
        { load
          ? makePage(especifcProd) : null }
      </Container>
    </main>
  );
}
