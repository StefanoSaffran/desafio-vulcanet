import React, { FC } from 'react';

import { Container, PriceDetails } from './styles';

interface IProps {
  total: number;
  selectedPlan: string;
}

const Footer: FC<IProps> = ({ total, selectedPlan }) => {
  return (
    <Container>
      <PriceDetails>
        <strong>Total: R${total}/mês</strong>
        <span>Plano selecionado: {selectedPlan} - Mensal</span>
      </PriceDetails>
      <button type="button">Contratar</button>
    </Container>
  );
};

export default Footer;
