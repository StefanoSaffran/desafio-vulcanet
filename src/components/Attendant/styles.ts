import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'styled-icons/evaicons-solid';

export const Container = styled.div`
  height: 90px;

  display: flex;
  align-items: center;

  padding: 0 40px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;

  > p {
    font-size: 32px;
    line-height: 38px;

    color: var(--quinary);
  }

  > span {
    font-size: 14px;
    line-height: 17px;
    color: var(--primary);
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: var(--primary);

  > button {
    color: var(--primary);
    background: none;

    &:focus {
      outline: 0;
    }
  }

  > span {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const DecrementIcon = styled(ChevronLeft)`
  width: 25px;
  height: 25px;
`;

export const IncrementIcon = styled(ChevronRight)`
  width: 25px;
  height: 25px;
`;
