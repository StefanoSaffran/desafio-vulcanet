import React, { FC } from 'react';

import { Container, PriceDetails } from './styles';

interface IProps {
  total: number;
  selectedPlan: string;
  selectedPeriod: string;
  handleFinishContract(): void;
}

const Footer: FC<IProps> = ({
  total,
  selectedPlan,
  selectedPeriod,
  handleFinishContract,
}) => {
  return (
    <Container>
      <PriceDetails>
        <strong>Total: R${total}/mês</strong>
        <span>
          Plano selecionado: {selectedPlan} -{' '}
          {selectedPeriod === 'monthly' ? 'Mensal' : 'Anual'}
        </span>
      </PriceDetails>
      <button type="button" onClick={() => handleFinishContract()}>
        Contratar
      </button>
    </Container>
  );
};

export default Footer;
