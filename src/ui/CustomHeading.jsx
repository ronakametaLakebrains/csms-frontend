import styled from "styled-components";

const sizeMap = {
  small: "1.5rem",
  medium: "2rem",
  large: "2.5rem",
};

const Heading = styled.h3`
  margin: 0;
  font-size: ${({ size }) => sizeMap[size] || sizeMap.medium};
  font-weight: 600;
  color: var(--color-primary);
  line-height: 1.3;
  letter-spacing: -0.5px;
`;

export default function CustomHeading({ size = "medium", children }) {
  return <Heading size={size}>{children}</Heading>;
}
