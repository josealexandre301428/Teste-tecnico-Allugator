import React, { Component } from 'react';
import { Container } from 'reactstrap';

class NotFoud extends Component {
  render() {
    return (
      <Container
        className="position-absolute top-50 start-50 translate-middle bg-danger"
      >
        <div className="d-flex flex-column mb-3">
          <h1 className="p-2">ERROR 404!</h1>
          <p className="p-2">Pagina não encontrada</p>
        </div>
      </Container>
    );
  }
}

export default NotFoud;
