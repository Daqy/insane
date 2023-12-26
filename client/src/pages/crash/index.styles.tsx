import styled, { keyframes, css } from "styled-components";
import Container from "../../components/container/container";
import { hexToRgb } from "../../services/converter";

export const container = styled(Container)`
  background: var(--color-container-main-bg);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-rows: calc(50% - 0.5rem) calc(50% - 0.5rem);
  gap: 1rem;
`;

export const inventory = styled(Container)`
  grid-row: span 2;
  background: var(--color-container-secondary-bg);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  align-items: center;
`;

export const itemContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const spacing = 2;

export const inventoryHeader = styled.div`
  display: flex;

  > * {
    display: flex;
    align-items: center;
    > span {
      margin-left: 0.2rem;
    }
    &:not(:first-child) {
      margin-left: ${spacing}rem;
    }
    &:not(:last-child) {
      margin-right: ${spacing}rem;
    }
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      right: -${spacing}rem;
      background: var(--color-highlight);
      height: 1rem;
      width: 1px;
    }
  }
`;

export const inventorySliderCurrent = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  margin-right: 2rem;
  color: var(--color-text-main);

  > span:not(.sliderLeft) {
    color: white;
  }

  .sliderLeft {
    width: max-content;
    margin-right: 0.4rem;
  }

  &::after {
    content: "";
    position: absolute;
    right: -1rem;
    background: var(--color-highlight);
    height: 1rem;
    width: 1px;
  }
`;

export const inventorySlider = styled(Container)`
  background: var(--color-container-tertiary-bg);
  color: white;
  display: flex;
  align-items: center;
  height: fit-content;
  margin-bottom: 0.4rem;

  > input {
    width: 100%;
    margin: 0px 1rem;
  }
`;

export const items = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  overflow-y: auto;
  flex-grow: 1;
  align-content: start;
  /* height: 100%; */

  &:hover {
    cursor: pointer;
  }
`;

const loadSelected = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

const selectedTheme = {
  fn: "#cba53c",
  mw: "#7b59b5",
  ft: "#79ffd7",
  ww: "#97ed4c",
  bs: "#ffffff",
};

export const item = styled(Container)`
  flex-basis: calc(calc(100% - calc(0.4rem * 2)) / 3);
  padding: 0.5rem;
  background: var(--color-container-tertiary-bg);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: fit-content;
  color: ${(props) =>
    props.selected ? selectedTheme[props.theme.selected] : ""};

  &::after {
    content: "";
    position: relative;
    background: ${(props) =>
      props.selected
        ? selectedTheme[props.theme.selected]
        : "var(--color-highlight)"};
    width: 25%;
    height: 3px;
    border-radius: 10px;
    align-self: center;
    margin-top: 1rem;
  }
`;

export const itemBackground = styled.div`
  background: linear-gradient(
    0deg,
    rgba(${(props) => hexToRgb(selectedTheme[props.theme.selected])}, 0.4) 2%,
    rgba(${(props) => hexToRgb(selectedTheme[props.theme.selected])}, 0.1) 100%
  );
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  opacity: 0;
  animation: ${loadSelected} 0.3s ease forwards;
  /* transition: all 1s ease-in; */
`;

export const itemHeader = styled.div`
  > span {
    border-radius: 7px;
    padding: 0.15rem 0.3rem;
    font-size: 0.8rem;
    display: flex;
    width: fit-content;
    text-transform: uppercase;
    background: none;
    line-height: 0.8rem;

    /* font-weight: bold; */
    color: ${(props) =>
      props.selected ? "var(--color-container-tertiary-bg)" : ""};
    background: ${(props) =>
      props.selected ? selectedTheme[props.theme.selected] : ""};
    border: 2px solid
      ${(props) =>
        props.selected
          ? selectedTheme[props.theme.selected]
          : "var(--color-highlight)"};
  }
`;
export const itemImage = styled.div`
  min-height: 80px;
  > img {
    width: 100%;
  }
`;
export const itemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h3 {
    font-size: 0.9rem;
    font-weight: normal;
  }
  > p {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const gameContainer = styled(Container)`
  grid-column: span 2;
  /* display: flex; */
  /* flex-direction: column; */
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 0.5rem;
  max-height: -webkit-fill-available;
`;

export const gameHeader = styled.div`
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const gameCanvas = styled.div`
  overflow: hidden;
  /* flex-grow: 1; */

  /* > canvas {
    width: 100%;
    height: 100%;
    aspect-ratio: 10;
  } */
`;

export const gameMultipliers = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  gap: 0.5rem;
  overflow: hidden;
`;

export const gameMultiplier = styled.p`
  background: var(--color-container-secondary-bg);
  border-radius: 5px;
  padding: 0.2rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const gameHeading = styled.h1`
  color: white;
`;

export const gameMenu = styled(Container)`
  background: var(--color-container-secondary-bg);
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const gameMenuInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;

  &:after {
    content: "x";
    position: absolute;
    font-size: 1.1rem;
    left: 0.95rem;
    bottom: 0.8rem;
  }

  > input {
    color: white;
    background: var(--color-container-secondary-bg);
    border: 2px solid var(--color-highlight);
    font-size: 1.3rem;
    border-radius: 5px;
    padding: 0.7rem 10.3rem 0.7rem 1.5rem;

    &::placeholder {
      color: var(--color-highlight);
    }

    &:focus {
      outline: none;
    }
  }
  .buttons {
    display: flex;
    position: absolute;
    bottom: 0.5rem;
    gap: 0.5rem;
    right: 0.5rem;
  }

  .buttons > button {
    font-size: 1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 4px;
    background: var(--color-container-tertiary-bg);
    border: none;
    color: var(--color-text-main);

    &:hover {
      cursor: pointer;
      background: var(--color-container-tertiary-highlight-bg);
    }
  }
`;

export const gameButton = styled.button`
  background: var(--color-accent);
  border: 2px solid var(--color-accent);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  padding: 1rem;
  transition: all 0.2s ease-in;

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    background: none;
  }
`;

export const gameInventory = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  overflow: auto;
`;

export const inventoryItems = styled(Container)`
  padding: 0.4rem 0rem;
  background: var(--color-container-tertiary-bg);
  flex-basis: calc(calc(100% - calc(0.4rem * 4)) / 5);
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;

  &::after {
    content: "";
    position: relative;
    background: var(--color-highlight);
    width: 25%;
    height: 3px;
    border-radius: 10px;
    align-self: center;
    margin-top: 0.4rem;
  }
`;

export const inventoryItemImage = styled.div`
  min-height: 60px;
  margin-bottom: 0.2rem;
  > img {
    width: 100%;
  }
`;
export const invetoryItemPrice = styled.p`
  color: white;
  font-size: 0.9rem;
`;

export const playersContainer = styled(Container)`
  background: var(--color-container-secondary-bg);
  display: flex;
  flex-direction: column;
`;

export const players = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  overflow-y: auto;
  flex-grow: 1;
`;

export const playersShadow = styled.div`
  position: absolute;
  background: rgb(32, 35, 48);
  background: linear-gradient(
    0deg,
    rgba(32, 35, 48, 1) 2%,
    rgba(0, 212, 255, 0) 100%
  );
  width: calc(100% - 2rem);
  height: 3rem;
  /* bottom: 0px; */
  bottom: 1rem;
  left: 1rem;
`;

export const playerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  /* gap: 3rem; */
  margin-bottom: 1rem;
`;

export const player = styled(Container)`
  background: var(--color-container-tertiary-bg);
  padding: 0.5rem;
  display: grid;
  height: fit-content;
  grid-template-columns: 1fr 2fr auto;
  grid-template-rows: minmax(2.5rem, 2.5rem);

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const playerInfo = styled.div`
  gap: 1rem;
  justify-content: start;
  max-width: 100px;
`;

export const playerMoneyInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const playerIcon = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    border-radius: 100px;
    overflow: hidden;
    background: black;
    height: 100%;
    aspect-ratio: 1/1;
  }
`;
export const playerName = styled.p`
  color: white;
`;

export const playerMultiplier = styled.p``;
export const playerBet = styled.p``;

export const playerPotential = styled.div`
  background: rgba(var(--color-orange-rgb), 0.15);
  color: var(--color-orange);
  padding: 0.7rem;
  border-radius: 10px;
`;
