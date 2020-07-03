import styled from 'styled-components';

export const Container = styled.div`
  width: 1150px;
  height: 823px;

  background: var(--white);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const ButtonsContainer = styled.div`
  background: var(--buttonBackground);

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 100px;

  margin-top: 23px;
  width: fit-content;

  display: flex;
  align-self: center;
`;

export const Button = styled.button`
  padding: 8px 25px;
  border: 0;
  background: none;
  color: var(--quinary);

  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  text-align: center;

  &.active {
    background-color: var(--primary);
    border-radius: 100px;
    color: var(--white);
  }

  &:focus {
    outline: 0;
  }
`;

export const Plans = styled.div`
  width: 100%;
  height: calc(100% - 23px - 37px - 30px - 90px - 106px);

  margin-top: 30px;

  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 785px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
