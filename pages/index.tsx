import 'bootstrap/dist/css/bootstrap.min.css';
import type { NextPage } from 'next'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Home: NextPage = () => {
  const [count, setCount] = useState(10)
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>{count}</Col>
          <Col sm={4}>
            <Button as='a' variant='primary' onClick={() => { setCount(count + 1) }}>
              Incrementar
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
