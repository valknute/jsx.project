import Card from "react-bootstrap/Card";

function CardJS(props) {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={props.image}
          style={{ width: 300, height: 300 }}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <div>{props.description}</div>
            <div>{props.price}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardJS;
