import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Explore a world of seamless real estate transactions with Realtinger. Discover your dream home, sell properties effortlessly, and stay updated with the latest trends. Your key to a streamlined real estate experience is just a click away."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Your Platform for Cooperative Real Estate Ventures." overTitle="seamless collaboration">
            <p>
            Unlock the power of collaboration on Realtinger. Whether you're a buyer, seller, or investor, our platform offers a range of tools to streamline cooperation. 
            Connect with potential partners, share insights, and negotiate deals with ease. Realtinger is not just a platform; it's your collaborative hub for successful real estate ventures. 
            Start cooperating today and turn opportunities into achievements
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Turning Real Estate Goals into Achievements." overTitle="celebrate milestones" reversed>
            <p>
            Realtinger is more than a platform; <strong>it's your partner in achieving real estate success</strong>. 
            From finding your dream property to closing deals and maximizing returns, we empower you to reach your milestones. 
            Join a community that celebrates your achievements in the dynamic world of real estate. With Realtinger, every step is a triumph. Start your journey toward real estate success today.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
