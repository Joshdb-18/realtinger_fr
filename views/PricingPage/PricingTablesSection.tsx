import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for agile teams</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="free"
          description="Give us a try for free"
          benefits={['Property Listings', 'Basic Search', 'Limited Virtual Tours', '2 Property listings']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Starter"
          description="Best for individual realtors"
          benefits={['Enhanced Property Listings', 'Advanced Search Filters', 'Unlimited Virtual Tours', 'Market Insights', '10 Property listings']}
          isOutlined
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Premium"
          description="Get your team together"
          benefits={[
            'Premium Property Listings',
            'Priority Customer Support',
            'Unlimited Property Listings',
            'Comprehensive Market Insights',
            'Exclusive Webinars',
            'Data Analytics Dashboard',
            'Customization',
          ]}
        >
          $79<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
