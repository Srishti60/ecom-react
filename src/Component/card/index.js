import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ImageCard({ filteredData }) {
  
  if (!filteredData) {
    return <div>Loading...</div>;
  }

 
  if (!Array.isArray(filteredData) || filteredData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Row className='image_card' style={{ margin: '20px' }}>
      {filteredData.map((item, index) => (
          <Col key={index} style={{ margin: '13px' }}>
        <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.thumbnail}  style={{ height: '200px', objectFit: 'cover' }}  /> 
          <Card.Body>
            <Card.Title>{item.title}</Card.Title> 
            <Card.Text>
              {item.description}
            </Card.Text>
            <Card.Text>
            Price:  {item.price}
            </Card.Text>
            <Card.Text>
            Rating:  {item.rating}
            </Card.Text>
          
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ImageCard;
