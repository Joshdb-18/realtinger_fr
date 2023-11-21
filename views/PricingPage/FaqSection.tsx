import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="How can I list my property on Realtinger?">
      Listing your property is simple! Sign in to your account, navigate to the "List Property" section, and follow the step-by-step instructions. 
      Provide essential details, upload images, and your property will be live in no time
      </Accordion>
      <Accordion title="What types of properties are featured on Realtinger?">
      Realtinger features a diverse range of properties, including residential homes, apartments, commercial spaces, and investment properties. 
      Our platform is designed to cater to the varied needs of both homebuyers and investors
      </Accordion>
      <Accordion title="How can I schedule a virtual tour of a property?">
      Scheduling a virtual tour is easy! Simply navigate to the property listing you're interested in, and you'll find an option to schedule a virtual tour. 
      Choose a convenient time, and you'll receive instructions on how to join the virtual tour.
      </Accordion>
      <Accordion title="What market insights are available on Realtinger?">
      Realtinger provides users with essential market insights, including trends, median property prices, and neighborhood analyses. 
      For more comprehensive data, consider upgrading to our premium plan for in-depth analytics and market intelligence
      </Accordion>
      <Accordion title="Can I switch my subscription plan at any time?.">
      Yes, you can! Whether you're looking to upgrade for additional features or downgrade to a different plan, you have the flexibility to switch your subscription at any time. Simply visit the "Subscription" section in your account settings to make changes.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
