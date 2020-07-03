import styled from 'styled-components';
import { shade } from 'polished';
import { CheckmarkCircle2 } from 'styled-icons/evaicons-solid';

export const Container = styled.div`
  width: 100%;
  padding: 20px 40px;

  overflow-y: hidden;

  &:not(:last-child) {
    border-right: 1px solid #dddddd;
  }
`;

export const PlanInfo = styled.div`
  p {
    margin-top: 5px;
    color: var(--gray);
    line-height: 28px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }

  h1 {
    color: var(--primary);
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  span {
    color: var(--primary);
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
  }
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 22px;
  line-height: 31px;
  text-align: center;
  margin-top: 8px;
  height: 38px;

  background: ${shade(0.03, `#f4f7fc`)};
  color: var(--quaternary);
  border-radius: 100px;

  &.active {
    background: var(--secondary);
    color: var(--white);
  }

  &:hover {
    border: 1px solid var(--secondary);
  }

  &:focus {
    outline: 0;
  }
`;

export const Features = styled.ul`
  height: 100%;
  overflow-y: scroll;

  margin-top: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;

  & + li {
  }

  span {
    color: var(--tertiary);
    font-size: 16px;
    line-height: 28px;
  }
`;

export const CheckIcon = styled(CheckmarkCircle2)`
  height: 22px;
  width: 22px;
  margin-right: 8px;

  color: var(--secondary);
`;
