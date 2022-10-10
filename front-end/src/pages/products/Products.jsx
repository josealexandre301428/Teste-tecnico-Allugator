import React, { useState, useEffect } from 'react';
import { Input, Card } from 'reactstrap';
import api from '../../services/Api';
import NavBar from './components/NavBar';
import makeProducts from '../../services/handlerProduct';

export default function CustomProducts() {
  const [search, setSearch] = useState('');
  const [searchValid, setSearchValid] = useState(false);
  const [productValid, setProductValid] = useState(false);
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [valueState, setValue] = useState({});

  const handleSearch = (value, product) => {
    setSearch(value);
    const productsFilter = product.filter((item) => item.name
      .toLowerCase().includes(value.toLowerCase()));
    if (value === '') {
      setProductValid(true);
      setSearchValid(false);
    } else {
      setProductValid(false);
      setSearchValid(true);
    }
    setProductFilter(productsFilter);
  };

  const handleFetch = async () => {
    try {
      const product = await api.get('/products');
      setProducts(product.data);
      setSearchValid(false);
      setProductValid(true);
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

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(valueState));
  }, [valueState]);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main>
      <NavBar />
      <Card className="Card text-center  bg-light border">
        <Input
          className="mb-3"
          placeholder="pesquise"
          value={ search }
          onChange={ ({ target: { value } }) => handleSearch(value, products) }
        />
      </Card>
      <div className="cardGroup">
        { productValid ? products
          .map((product, index) => makeProducts(product, index)) : null }
        { searchValid ? productFilter
          .map((product, index) => makeProducts(product, index)) : null }
      </div>
    </main>
  );
}
