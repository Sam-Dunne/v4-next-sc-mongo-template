import Head from "next/head";
import { Container,  HeroH1, H2 } from "../globalstyle";
import { ArticleList } from "../components/ArticleList/ArticleList";

export default function Home({articles}) {
  // console.log(articles)
  return (
    <>
      <Head>
        <title>Hi, I&apos;m Sam</title> 
      </Head>
      <Container>
      
          <HeroH1 centered>
            Hi, I&apos;m Sam Dunne
          </HeroH1>
          <ArticleList articles={articles}></ArticleList>
        
      
      </Container>

    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}