import React, { FC, useCallback } from 'react';

import {
  Container,
  Details,
  Quantity,
  DecrementIcon,
  IncrementIcon,
} from './styles';

interface IProps {
  attendantPrice: number;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const Attendant: FC<IProps> = ({ attendantPrice, quantity, setQuantity }) => {
  const handleQuantity = useCallback(
    (newQuantity: number) => {
      if (newQuantity < 0) return;

      setQuantity(newQuantity);
    },
    [setQuantity],
  );

  return (
    <Container>
      <Details>
        <p>Atendentes</p>
        <span>+R${attendantPrice}/mês por atendente</span>
      </Details>
      <Quantity>
        <button type="button" onClick={() => handleQuantity(quantity - 1)}>
          <DecrementIcon />
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={() => handleQuantity(quantity + 1)}>
          <IncrementIcon />
        </button>
      </Quantity>
    </Container>
  );
};

export default Attendant;
