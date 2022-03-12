import React from "react";
import Icon3 from "../../../assets/pictures/img-3.png";
import Icon2 from "../../../assets/pictures/img-2.png";
import Icon1 from "../../../assets/pictures/carImg.png";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
} from "./ServiceSectionStyled";
const ServiceSection = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            you can accesss our platform online anywhere in the world
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premimum Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that return 5% cash back
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServiceSection;
