import Head from "next/head";
import { Container,  HeroH1, H2 } from "../globalstyle";

export default function Home() {

  return (
    <>
      <Head>
        <title>Hi, I&apos;m Sam</title> 
      </Head>
      <Container>
      
          <HeroH1 centered>
            Hi, I&apos;m Sam Dunne
          </HeroH1>
          <H2>
            A developer seeking opportunities to learn and grow in a professional environment.
          </H2>
          <H2>
            Thanks for visiting this site!
          </H2>
          <H2>
            I would love to see some production code.
          </H2>
          <H2>
            I would love to learn how to build well, not just get stuff to work.
          </H2>
          <H2>
            I would love to contribute to a team, and not just code in a vaccuum.
          </H2>
          <H2>
            I would love the chance to interview. Even if I fail, I will learn something along the way.
          </H2>
        
      
      </Container>

    </>
  );
}