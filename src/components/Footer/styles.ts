import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
  height: 150px;

  background: var(--primary);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 0 40px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: bold;
    line-height: 24px;

    width: 100%;

    border-radius: 100px;

    color: var(--white);
    background: var(--secondary);
    border: 1px solid var(--secondary);

    padding: 6px 48px;

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

  @media (min-width: 600px) {
    flex-direction: row;
    height: 106px;

    > button {
      width: fit-content;
    }
  }

  @media (min-width: 930px) {
    > button {
      font-size: 24px;
      line-height: 28px;

      padding: 6px 64px;
    }
  }
`;

export const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: var(--white);
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  span {
    color: var(--senary);
    font-size: 16px;
    line-height: 18px;
  }

  @media (min-width: 930px) {
    strong {
      font-size: 32px;
      line-height: 38px;
    }

    span {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;
