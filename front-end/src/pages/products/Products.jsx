import React, { useState, useEffect } from 'react';
import {
  Input,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import api from '../../services/Api';
import NavBar from './components/NavBar';
import makeProducts from '../../services/handlerProduct';
import {
  filterByGreatPrice,
  filterByMinorPrice,
  filterByAlfabetic,
} from '../../services/handleFilters';

export default function CustomProducts() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [valueState, setValue] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const handlerFilter = (name) => {
    switch (name) {
    case 'alfabetic':
      setProducts(filterByAlfabetic(products));
      break;
    case 'menor':
      setProducts(filterByMinorPrice(products));
      break;
    case 'maior':
      setProducts(filterByGreatPrice(products));
      break;
    default:
      break;
    }
  };
  const handleFetch = async () => {
    try {
      const product = await api.get('/products');
      setProducts(product.data);
      const nameMap = product.data.map(({ name, id, price }) => ({ name, id, price }))
        .reduce((acc, curr) => {
          acc[curr.name] = {
            name: curr.name,
            id: curr.id,
            price: curr.price,
          };
          return acc;
        }, {});
      setValue(nameMap);
    } catch (error) {
      setError(true);
    }
  };

  const handleSearch = (value, product) => {
    setSearch(value);
    if (value.length === 0) handleFetch();
    const productsFilter = product.filter((item) => item.name.toLowerCase()
      .includes(value.toLowerCase()));
    setProducts(productsFilter);
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
      <Nav className="text-center vstack gap-2 col-md-5 mx-auto">
        <NavItem className="text-center">
          <Input
            className="text-center"
            placeholder="Pesquise aqui"
            value={ search }
            onChange={ ({ target: { value } }) => handleSearch(value, products) }
          />
        </NavItem>
        <Dropdown
          className="btn btn-success btn-sm dropdown-center"
          nav
          isOpen={ dropdownOpen }
          toggle={ toggle }
        >
          <DropdownToggle nav caret className="text-white">
            Filtros
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Filtros</DropdownItem>
            <DropdownItem
              id="alfabetic"
              onClick={ (e) => handlerFilter(e.target.id) }
            >
              Ordem Alfabetica
            </DropdownItem>
            <DropdownItem
              id="menor"
              onClick={ (e) => handlerFilter(e.target.id) }
            >
              Menor Valor
            </DropdownItem>
            <DropdownItem
              id="maior"
              onClick={ (e) => handlerFilter(e.target.id) }
            >
              Maior Valor
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
      <div className="container cardGroup">
        { products.map((product, index) => makeProducts(product, index)) }
      </div>
    </main>
  );
}
