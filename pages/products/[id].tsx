import type { NextPage } from 'next'

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

const Products: NextPage = () => {
    return (
        <>
            <p>aqui</p>
        </>
    );
}

export default Products;