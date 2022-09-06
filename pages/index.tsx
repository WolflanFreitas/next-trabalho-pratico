import 'bootstrap/dist/css/bootstrap.min.css';
import type { NextPage } from 'next'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home: NextPage = () => {

  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            Aqui
          </Col>
          <Col sm={4}>
            Acolá
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
