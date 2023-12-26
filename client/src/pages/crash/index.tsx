import * as S from "./index.styles";
import IconText from "../../components/iconText/iconText";
import { useRef, useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/chat";
import { Graphics, Stage } from "@pixi/react";

type Item = {
  id: number;
  name: string;
  price: number;
  condition: string;
  imgSrc: string;
};

type Player = {
  name: string;
  price: number;
};

export default function Crash() {
  const [multiplier, setMultiplier] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  const [players, setPlayers] = useState<Player[]>([]);

  const [inventory, setInventory] = useState<Item[]>([]);
  const dispatch = useDispatch();

  const tempRandom = ["fn", "mw", "ft", "ww", "bs"];

  useEffect(() => {
    for (let i = 0; i < 21; i++) {
      setInventory((inventory) => [
        ...inventory,
        {
          id: i,
          name: "usp-s",
          price: getRandomInt(1000, 10000),
          condition: tempRandom[getRandomInt(0, tempRandom.length - 1)],
          imgSrc:
            "https://raw.githubusercontent.com/ByMykel/CSGO-API/efe25483a04a03414dea9c61d4b0e958a373cdfd/public/images/econ/default_generated/weapon_deagle_hy_ddpat_urb_light.png",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    setPriceRange(
      Math.ceil(
        Math.max(...inventory.map((item) => item.price)) / 100
      ).toString()
    );
  }, [inventory]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  // const selectedItems: Item[] = [];

  const onItemClick = (id: number) => {
    const item = inventory.filter((item) => item.id === id)[0];
    if (!isSelected(id)) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems([...selectedItems.filter((item) => item.id !== id)]);
    }
    // selectedItems.push(item);
  };

  const isSelected = (id: number) => {
    return selectedItems.filter((item) => item.id === id).length > 0;
  };

  const playersDom = useRef();
  const inventoryDom = useRef();
  const gameInventoryDom = useRef();

  const multipliers = [
    1.1, 2.14, 3.44, 10.23, 1.1, 1.1, 2.14, 3.44, 10.23, 1.1, 2.14, 3.44, 10.23,
    1.1, 2.14, 3.44, 10.23,
  ];

  const joinGame = () => {
    const player = {
      name: "jimmy",
      price: selectedItems.reduce((total, item) => total + item.price, 0),
    };

    setPlayers([...players, player]);
    console.log("join");
  };

  const stage = document.getElementsByClassName("stage")[0];
  console.log(stage?.clientWidth);
  const curve = useCallback(
    (g) => {
      g.clear();
      g.lineStyle(5, 0xaa0000, 1);
      // g.beginFill();
      g.bezierCurveTo(
        0,
        0,
        stage?.clientWidth - 200,
        0,
        stage?.clientWidth - 100,
        -250
      );
      g.position.x = 50;
      g.position.y = stage?.clientHeight - 50;
      g.endFill();
    },
    [stage]
  );

  // const canvas = document.getElementsByClassName(
  //   "myCanvas"
  // )[0] as HTMLCanvasElement;
  // // console.log(document.getElementsByClassName("myCanvas"));
  // const ctx = canvas?.getContext("2d");
  // if (ctx) {
  // ctx.beginPath();
  // ctx.moveTo(50, 550);
  // ctx.bezierCurveTo(50, 550, 850, 550, 850, 50);
  // ctx.stroke();
  // width="900" height="600"
  // }

  return (
    <S.container>
      <S.inventory>
        <S.inventoryHeader>
          <p>
            Total:{" "}
            <span style={{ color: "white" }}>
              ${inventory.reduce((total, item) => total + item.price, 0) / 100}
            </span>
          </p>
          <p>
            Selected:{" "}
            <span style={{ color: "white" }}>
              $
              {selectedItems.reduce((total, item) => total + item.price, 0) /
                100}
            </span>
          </p>
          <p>
            <input type="checkbox" />
            <span>All</span>
          </p>
        </S.inventoryHeader>
        <S.itemContainer>
          <S.inventorySlider>
            <S.inventorySliderCurrent>
              <span className="sliderLeft">Up to:</span>{" "}
              <span>${priceRange}</span>
            </S.inventorySliderCurrent>
            $0
            <input
              type="range"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              max={Math.ceil(
                Math.max(...inventory.map((item) => item.price)) / 100
              )}
            />
            ${Math.ceil(Math.max(...inventory.map((item) => item.price)) / 100)}
          </S.inventorySlider>
          <S.items ref={inventoryDom}>
            {inventory.map((item, index) => {
              if (parseInt(priceRange) > item.price / 100) {
                return (
                  <S.item
                    key={index}
                    onClick={() => onItemClick(item.id)}
                    selected={isSelected(item.id)}
                    theme={{ selected: item.condition }}
                  >
                    {isSelected(item.id) ? (
                      <S.itemBackground theme={{ selected: item.condition }} />
                    ) : (
                      ""
                    )}
                    <S.itemHeader
                      selected={isSelected(item.id)}
                      theme={{ selected: item.condition }}
                    >
                      <span>{item.condition}</span>
                    </S.itemHeader>
                    <S.itemImage>
                      <img src={item.imgSrc} alt={item.name} />
                    </S.itemImage>
                    <S.itemInfo>
                      <h3>{item.name}</h3>
                      <p>${(item.price / 100).toFixed(2)}</p>
                    </S.itemInfo>
                  </S.item>
                );
              }
            })}
          </S.items>
        </S.itemContainer>
        {inventoryDom.current &&
        inventoryDom.current.scrollHeight >
          inventoryDom.current.clientHeight ? (
          <S.playersShadow />
        ) : (
          <></>
        )}
      </S.inventory>

      <S.gameContainer>
        <S.gameHeader>
          <div>
            <img src="" alt="logo" />
            <S.gameHeading>Crash</S.gameHeading>
          </div>
          <div>
            <p>how to play</p>
            <p>hotkeys</p>
          </div>
          <button onClick={() => dispatch(toggle())}>open</button>
        </S.gameHeader>
        <S.gameCanvas className="stage">
          <Stage
            width={stage?.clientWidth}
            height={stage?.clientHeight}
            options={{ backgroundAlpha: 0.2 }}
          >
            <Graphics draw={curve} />
          </Stage>
          {/* <canvas width="900" height="600" className="myCanvas"></canvas> */}
        </S.gameCanvas>
        <S.gameMultipliers>
          {multipliers.map((multiplier, index) => (
            <S.gameMultiplier key={index}>{multiplier}</S.gameMultiplier>
          ))}
        </S.gameMultipliers>
      </S.gameContainer>

      <S.gameMenu>
        <S.gameMenuInput>
          <p>Auto cashout (multiplier)</p>
          <input
            type="text"
            value={multiplier}
            placeholder="10"
            onChange={(e) => setMultiplier(e.target.value)}
          />
          <div className="buttons">
            <button onClick={() => setMultiplier("1")}>x1</button>
            <button onClick={() => setMultiplier("2")}>x2</button>
            <button onClick={() => setMultiplier("10")}>x10</button>
          </div>
        </S.gameMenuInput>
        <S.gameButton disabled={selectedItems.length === 0} onClick={joinGame}>
          Join next game
        </S.gameButton>
        <S.gameInventory ref={gameInventoryDom}>
          {selectedItems.map((item, index) => {
            return (
              <S.inventoryItems key={index}>
                <S.inventoryItemImage>
                  <img src={item.imgSrc} alt={item.name} />
                </S.inventoryItemImage>
                <S.invetoryItemPrice>
                  ${(item.price / 100).toFixed(2)}
                </S.invetoryItemPrice>
              </S.inventoryItems>
            );
          })}
        </S.gameInventory>
        {gameInventoryDom.current &&
        gameInventoryDom.current.scrollHeight >
          gameInventoryDom.current.clientHeight ? (
          <S.playersShadow />
        ) : (
          <></>
        )}
      </S.gameMenu>

      <S.playersContainer>
        <S.playerHeader>
          <IconText>
            {{
              title: "fairness",
              text: "E4f3...f355", //secret for the game
              icon: <></>,
            }}
          </IconText>
          <IconText>
            {{
              title: "users",
              text: players.length.toString(),
              icon: <></>,
            }}
          </IconText>
          <IconText>
            {{
              title: "bank",
              text: `$${
                players.reduce((total, player) => total + player.price, 0) / 100
              }`,
              icon: <></>,
            }}
          </IconText>
        </S.playerHeader>
        <S.players className="players" ref={playersDom}>
          {players.map((player, index) => {
            return (
              <S.player key={index}>
                <S.playerInfo>
                  <S.playerIcon>
                    <img src="" alt="" />
                  </S.playerIcon>
                  <S.playerName>{player.name}</S.playerName>
                </S.playerInfo>

                <S.playerMoneyInfo>
                  <S.playerMultiplier>
                    <span style={{ color: "white", marginRight: "0.2rem" }}>
                      2
                    </span>
                    x
                  </S.playerMultiplier>

                  <S.playerBet>${player.price / 100}</S.playerBet>
                </S.playerMoneyInfo>
                <div style={{ justifyContent: "end" }}>
                  <S.playerPotential>
                    <></>
                    25
                  </S.playerPotential>
                </div>
              </S.player>
            );
          })}
        </S.players>
        {playersDom.current &&
        playersDom.current.scrollHeight > playersDom.current.clientHeight ? (
          <S.playersShadow />
        ) : (
          <></>
        )}
      </S.playersContainer>
    </S.container>
  );
}
