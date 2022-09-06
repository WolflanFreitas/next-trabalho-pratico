import 'bootstrap/dist/css/bootstrap.min.css';
import type { NextPage } from 'next'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFetch } from '../hook/fetchTyped';
import { Alert } from 'react-bootstrap';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

const Home: NextPage = () => {
  const url = 'https://fakestoreapi.com/products?limit=10';
  const { data, error } = useFetch<Product[]>(url);

  if (error) {
    return (
      <Container fluid>
        <Row className='mt-5'>
          <Col xl={12}>
            <Alert variant='danger'>Não foi possível realizar a conexão na api: <a href={url}>{url}</a></Alert>
          </Col>
        </Row>
      </Container>
    )
  }

  if (!data) {
    return <p>Carregando...</p>
  }


  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>

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
