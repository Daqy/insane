import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../../components/container/container";

const navSize = 4;

export const topNav = styled.nav`
  height: ${navSize}rem;
  width: calc(100vw - ${navSize}rem);
`;

export const bottomNav = styled.nav`
  width: ${navSize}rem;
  height: calc(100vh - ${navSize}rem);
  display: flex;
  flex-direction: column;
  align-items: Center;
`;

export const logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${navSize}rem;
  height: ${navSize}rem;

  > img {
    background: green;
    width: 80%;
    height: 80%;
  }
`;

export const container = styled.div`
  display: grid;
  grid-template-columns: minmax(${navSize}rem, ${navSize}rem) 1fr;
`;

export const navigate = styled(Link)`
  width: 80%;
  aspect-ratio: 1/1;
`;

const padding = 1;

export const main = styled.main`
  padding: 0px ${padding}rem ${padding}rem 0px;
  max-height: calc(100vh - ${navSize}rem);
  display: flex;
  gap: 1rem;
`;

export const chat = styled(Container)`
  width: 30rem;
  height: 100%;
  background: var(--color-container-main-bg);
`;
