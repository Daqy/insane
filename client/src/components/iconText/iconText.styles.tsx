import styled from "styled-components";

export const container = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
`;

export const textContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const title = styled.h3`
  text-transform: uppercase;
  font-size: 0.8rem;
`;

export const text = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const iconContainer = styled.div`
  height: 2rem;
  aspect-ratio: 1/1;
  background: red;
  margin-right: 0.5rem;
`;
