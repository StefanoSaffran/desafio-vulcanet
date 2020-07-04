import React, { FC } from 'react';

import icon from '../../assets/icon.svg';
import { IPlan } from '../Content';

import {
  Container,
  PlanInfo,
  NameContainer,
  PriceInfo,
  Button,
  Features,
  Feature,
  CheckIcon,
} from './styles';

interface IProps {
  plan: IPlan;
  selected: string;
  selectedPlan: string;
  setSelectedPlan: (name: string) => void;
}

const Plan: FC<IProps> = ({
  plan,
  selected,
  selectedPlan,
  setSelectedPlan,
}) => {
  const { name, description, prices, features } = plan;

  return (
    <Container>
      <PlanInfo>
        <NameContainer>
          <img src={icon} alt="message icon" />
          <h1>{name}</h1>
        </NameContainer>
        <p>{description}</p>
      </PlanInfo>

      <PriceInfo>
        <span>R${prices[selected]}/mês</span>
        <Button
          onClick={() => setSelectedPlan(name)}
          className={selectedPlan === name ? 'active' : ''}
        >
          Selecionar
        </Button>
      </PriceInfo>

      <Features>
        {features?.map(feature => (
          <Feature key={feature}>
            <CheckIcon />
            <span>{feature}</span>
          </Feature>
        ))}
      </Features>
    </Container>
  );
};

export default Plan;
