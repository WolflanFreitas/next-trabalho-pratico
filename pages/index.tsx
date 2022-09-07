import 'bootstrap/dist/css/bootstrap.min.css';
import type { NextPage } from 'next'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import doTruncarStr from '../functions/truncate';
import { BsFillBasket3Fill } from "react-icons/bs";
import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=10');
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

const Home: NextPage = (props: any) => {

  const data = props.data;



  return (
    <>
      <Container fluid>
        <Row>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <Image src={'/cpu.png'} alt="logo" width={30} height={30} className={"d-inline-block align-top"} />
                <span className={"d-inline-block align-top"}>Lojão dos importados</span>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Row>
        <Row className='justify-content-around mt-3'>
          {data.map((product: any) => {
            return (
              <Col key={product.id} xl={'auto'} className='p-2'>
                <Card key={product.id} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product.image} style={{ width: '100%', height: 250 }} />
                  <Card.Body>
                    <Card.Title>{doTruncarStr(product.title, 20)}</Card.Title>
                    <Link href={`products/${product.id}`}>
                      <Button variant="primary">Veja mais <BsFillBasket3Fill /></Button>
                    </Link>
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
