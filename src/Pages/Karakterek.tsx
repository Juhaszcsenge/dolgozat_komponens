import React from 'react';
import { Card, Col, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <div className="container-fluid">
      <Row xs={1} md={2} className="g-4">
        <Col sm>
          <Card>
            <Card.Img variant="top" src="/fighter.png" alt='Harcos' style={{width: "330px", height:"400px"}} />
            <Card.Body>
              <Card.Title>Harcos</Card.Title>
              <Card.Text>
              Harcos karakter
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card>
            <Card.Img variant="top" src="/wizard.jpg" alt='Varázsló' style={{width: "350px", height:"400px"}} />
            <Card.Body>
              <Card.Title>Varázsló</Card.Title>
              <Card.Text>
              Varázsló karakter
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;