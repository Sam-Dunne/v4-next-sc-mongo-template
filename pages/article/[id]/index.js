import React from 'react'
import Link from 'next/link'
import { Container } from '../../../globalstyle'
import { useRouter } from 'next/router'

const article = ({ article }) => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Container>
            <div>article {id}</div>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </Container>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}));

    return {
        paths,
        fallback: false
        }
    }


export default article
