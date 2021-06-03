import React from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesH2, ServicesCard, ServicesIcon, ServicesP} from '../components/ServicesElement';
import Icon1 from '../Images/svg-1.svg';
import Icon2 from '../Images/svg-2.svg';
import Icon3 from '../Images/svg-3.svg';
import Icon4 from '../Images/svg-4.svg';
import Icon5 from '../Images/svg-5.svg';
import Icon6 from '../Images/svg-6.svg';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>100% Secure Payments</ServicesH2>
          <ServicesP>Moving your card details to a much more secured place</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>TrustPay</ServicesH2>
          <ServicesP>100% Payment Protection. Easy Return Policy </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Help Center</ServicesH2>
          <ServicesP>Got a question? Look no further. Browse our FAQs or submit your query here.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Shop on the Go</ServicesH2>
          <ServicesP>Download the app and get exciting app only offers at your fingertips</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Trade Assurance</ServicesH2>
          <ServicesP>Trade Assurance is a free order protection service offered by us.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Inspection Solution</ServicesH2>
          <ServicesP>Production Monitoring and inspection services on your website trade assurance orders.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;

