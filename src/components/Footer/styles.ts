import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
  height: 106px;

  background: var(--primary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-weight: bold;
    line-height: 28px;

    border-radius: 100px;

    color: var(--white);
    background: var(--secondary);
    border: 1px solid var(--secondary);

    padding: 6px 64px;

    &:hover {
      background: ${shade(0.07, '#43B998')};
    }

    &:active {
      border: 1px solid var(--white);
    }

    &:focus {
      outline: 0;
    }
  }
`;

export const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: var(--white);
    font-size: 32px;
    line-height: 38px;
  }

  span {
    color: var(--senary);
    font-size: 18px;
    line-height: 22px;
  }
`;
