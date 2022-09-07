import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { Alert } from 'react-bootstrap';
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

export async function getStaticPaths() {

    const res = await fetch('https://fakestoreapi.com/products?top=10');

    const products = await res.json();

    const paths = products.map((product: any) => ({
        params: { id: product.id.toString() }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: Product }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

    const product = await res.json();

    return { props: { product } }
}

const Products = (props: any) => {

    const product = props.product;

    return (
        <>
            <Container fluid>
                <Row>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">
                                <Image src={'/cpu.png'} alt="logo" width={30} height={30} className={"d-inline-block align-top"} />
                                <span className={"d-inline-block align-top"}>Lojão dos Importados</span>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </Row>
                <Row className='mt-5 justify-content-center'>
                    <Col xl={6}>
                        <Card>
                            <Card.Header className='bg-primary text-white'>{product.title}</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col xl={3}>
                                        <Card.Img variant="top" src={product.image} style={{ width: '100%', height: 250 }} />
                                    </Col>
                                    <Col xl={9}>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            <p>
                                                <strong>Descrição:</strong> <span>{product.description}</span>
                                            </p>
                                            <p>
                                                <strong>Preço:</strong> <span>{product.price}</span>
                                            </p>
                                            <p>
                                                <strong>Categoria:</strong> <span>{product.category}</span>
                                            </p>
                                            <p>
                                                <strong>Avaliação:</strong> <span>{product.rating.rate}/5</span>
                                            </p>
                                            <p>
                                                <strong>Quantidade de avaliações:</strong> <span>{product.rating.count}</span>
                                            </p>
                                        </Card.Text>
                                        <Button variant="success">Comprar</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Products;