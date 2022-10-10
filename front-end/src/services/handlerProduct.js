import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function makeProducts(product, index) {
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
