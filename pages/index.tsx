import 'bootstrap/dist/css/bootstrap.min.css';
import type { NextPage } from 'next'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFetch } from '../hook/fetchTyped';
import { Alert } from 'react-bootstrap';
import { CircleLoader } from 'react-spinners';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
  const url = 'https://fakestoreapi.com/products?limit=100';
  const { data, error } = useFetch<Product[]>(url);

  //Será chamado quando houver erro ao chamar a api (indisponibilidade ou chamada incorreta)
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

  //Ação que será executada enquanto os dados estão sendo carregados da API
  if (!data) {
    return (
      <Container fluid>
        <Row className='justify-content-center align-content-center vh-100'>
          <Col xl={'auto'}>
            <CircleLoader color={'fuchsia'} loading={true} size={150} />
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <Image src={'/cpu.png'} alt="logo" width={30} height={30} className={"d-inline-block align-top"} />
                <span className={"d-inline-block align-top"}>Lojão do Hardware</span>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Row>
        <Row className='justify-content-around mt-3'>
          {data.map((product) => {
            return (
              <Col key={product.id} xl={'auto'} className='p-2'>
                <Card key={product.id} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product.image} style={{ width: '100%', height: 250 }} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Home
