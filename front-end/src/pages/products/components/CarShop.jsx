import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

import { useNavigate } from 'react-router-dom';

export default function CarShop() {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState([]);

  const toggle = () => setModal(!modal);
  const redirect = useNavigate();

  const getProductsStorage = () => {
    const productsStorage = JSON.parse(localStorage.getItem('cart'));
    const arrayProducts = Object.values(productsStorage);
    setProducts(arrayProducts);
  };

  const removeItem = (id) => {
    const remove = (value) => value.id !== id;
    const deletedId = products.filter(remove);
    setProducts(deletedId);
    localStorage.setItem('cart', JSON.stringify(deletedId));
  };

  const handleClick = () => redirect('/checkout');

  useEffect(() => {
    getProductsStorage();
  }, [localStorage.getItem('cart')]);

  return (
    <div>
      <Button color="success" className="navItem" onClick={ toggle }>
        <i className="bi bi-basket-fill hoverable" />
      </Button>
      <Modal isOpen={ modal } toggle={ toggle }>
        <ModalHeader toggle={ toggle }>Produtos no carrinho</ModalHeader>
        <ModalBody className="container-flex">
          <ListGroup className="d-flex text-center" horizontal>
            <ListGroupItem className="p-2 flex-fill">
              Id
            </ListGroupItem>
            <ListGroupItem className="p-2 flex-fill">
              Nome
            </ListGroupItem>
            <ListGroupItem className="p-2 flex-fill">
              Preço
            </ListGroupItem>
            <ListGroupItem className="p-2 flex-fill">
              Excluir
            </ListGroupItem>
          </ListGroup>
          {
            products.map((item, index) => (
              <ListGroup
                className="d-flex text-center"
                key={ index }
                horizontal
              >
                <ListGroupItem className="p-2 flex-fill">
                  { item.id }
                </ListGroupItem>
                <ListGroupItem className="p-2 flex-fill">
                  { item.name }
                </ListGroupItem>
                <ListGroupItem className="p-2 flex-fill">
                  { item.price }
                </ListGroupItem>
                <ListGroupItem className="p-2 flex-fill">
                  <Button
                    className="flex-fill"
                    color="danger"
                    type="button"
                    onClick={ () => removeItem(item.id) }
                  >
                    Remover
                  </Button>
                </ListGroupItem>
              </ListGroup>
            ))
          }
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={ handleClick }>
            Finalizar
          </Button>
          <Button color="secondary" onClick={ toggle }>
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
