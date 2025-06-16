import styled from "styled-components";

const StyledStat = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 0.8rem;
  display: grid;
  grid-template-columns: 4.8rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.2rem;
  width: 100%;
  max-width: 22rem;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: 4.2rem 1fr;
    max-width: 16rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 3.8rem 1fr;
    max-width: 14rem;
  }
`;


const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: var(--color-${(props) => props.color}-700);
  }

  @media (max-width: 1200px) {
    & svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 992px) {
    & svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);

  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

const Value = styled.p`
  font-size: 2rem;
  line-height: 1;
  font-weight: 500;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 992px) {
    font-size: 1.6rem;
  }
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;
