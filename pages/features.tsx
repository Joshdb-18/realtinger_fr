import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Discover Tailored Listings.',
    description:
      'Explore a curated selection of properties tailored to your preferences, ensuring that every listing aligns with your unique vision of the perfect home or investment opportunity',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Streamlined Transactions.',
    description:
      ' Experience hassle-free transactions with our intuitive platform. From virtual tours to instant notifications, we have optimized every step of the process to make buying or selling property a seamless experience',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Exclusive Market Insights.',
    description:
      'Gain a competitive edge with exclusive market insights. Stay informed about trends, pricing changes, and emerging opportunities, enabling you to make well-informed decisions in a dynamic real estate landscape',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Cooperative Networking.',
    description:
      'Connect with like-minded individuals within the Realtinger community. Foster collaborations, share industry insights, and build valuable relationships that contribute to your success in the world of real estate',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Virtual Exploration.',
    description:
      'Virtually step into your future home with our immersive virtual tours. Explore every detail before making a decision, ensuring that the property meets your expectations and preferences',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Achievement Recognition.',
    description:
      'Celebrate your milestones in real estate on Realtinger. Join a supportive community that acknowledges and applauds your achievements, creating a positive environment for professional growth and recognition',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Efficient Investment Management.',
    description:
      'Optimize your investment strategy with our tools. Manage your portfolio, track performance, and access valuable analytics to make data-driven decisions that maximize returns on your real estate investments',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Expert Guidance at Your Fingertips.',
    description:
      'Access expert guidance and resources directly through Realtinger. From industry trends to legal advice, our platform provides a wealth of information to empower users with the knowledge needed for successful real estate ventures',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Features" description="Explore the array of features that make Realtinger the go-to platform for your real estate journey. .">
      <Wrapper>
        <SectionTitle>Check out this quick introduction</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
