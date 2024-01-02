import * as S from "./index.styles";
import IconText from "../../components/iconText/iconText";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/chat";
import { Application, Sprite as Sprite2, Graphics, Texture } from "pixi.js";
// import { Sprite, Graphics, Stage } from "@pixi/react";
import rocketUrl from "../../assets/rocket.gif";
import gradientUrl from "../../assets/gradient.png";

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

  // const rocket = Sprite.from("@/assets/rocket.gif");

  const [crash, setCrash] = useState(0.000000001);
  const stage = useRef<HTMLElement>();

  const getPositionFromCurve = (t, start, control, end) => {
    return {
      x: (1 - t) ** 2 * start.x + 2 * (1 - t) * t * control.x + t ** 2 * end.x,
      y: (1 - t) ** 2 * start.y + 2 * (1 - t) * t * control.y + t ** 2 * end.y,
    };
  };

  function createGradTexture() {
    // adjust it if somehow you need better quality for very very big images
    const quality = 1000;
    const canvas = document.createElement("canvas");

    canvas.width = quality;
    canvas.height = 1;

    const ctx = canvas.getContext("2d");

    // use canvas2d API to create gradient
    const grd = ctx.createLinearGradient(0, 0, quality, 0);

    grd.addColorStop(0, "#a3ff4e");
    grd.addColorStop(1, "#e92f2f");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, quality, 1);

    return Texture.from(canvas);
  }

  const gradTexture = createGradTexture();

  const crashCurve = useRef(0);
  crashCurve.current = crash;
  useEffect(() => {
    const app = new Application({
      background: "#1b1e2b",
      resizeTo: stage.current,
      antialias: true,
    });
    const rocket = Sprite2.from(rocketUrl);
    rocket.anchor.set(0.5, 0.02);
    rocket.width = 140 * 0.68867;
    rocket.height = 140;
    rocket.rotation = 0; // Math.PI / 2;
    rocket.x = app.screen.width - 100;
    rocket.y = app.screen.height - 50;

    const gradient = Sprite2.from(gradientUrl);
    gradient.scale.x = 1000;
    gradient.scale.y = 1000;
    // gradient.width = 1000;

    // const circle = new Graphics();
    // const circle2 = new Graphics();

    const crashLine = new Graphics();
    crashLine.lineTextureStyle({ width: 5, texture: gradTexture });
    // crashLine.lineStyle(5, 0xaa0000, 1);
    crashLine.bezierCurveTo(
      0,
      0,
      app.screen.width - 200,
      0,
      app.screen.width - 100,
      0
    );

    crashLine.position.x = 50;
    crashLine.position.y = app.screen.height - 50;

    app.stage.addChild(crashLine);
    app.stage.addChild(rocket);
    // app.stage.addChild(circle);
    // app.stage.addChild(circle2);

    // let total = 0.000000001;
    let count = 0;
    let addToPoint2 = 0;
    app.ticker.add((delta) => {
      // rocket.position.y -= rocket.position.y > 50 ? delta : 0;
      // total += total < app.screen.height - 100 ? delta * 0.5 : 0;
      // console.log(total);
      // console.log(delta);
      if (crashCurve.current < 265) {
        count++;
      } else {
        console.log(count);
      }
      const point1 = getPositionFromCurve(
        1,
        { x: 50, y: app.screen.height - 50 },
        { x: app.screen.width - 200, y: app.screen.height - 50 },
        {
          x: app.screen.width - 50,
          y: app.screen.height - 50 - crashCurve.current,
        }
      );

      addToPoint2 +=
        crashCurve.current < app.screen.height - 100 ? (0.1 * 1) / 265 : 0;
      const point2 = getPositionFromCurve(
        0.6999 + addToPoint2,
        { x: 50, y: app.screen.height - 50 },
        { x: app.screen.width - 200, y: app.screen.height - 50 },
        {
          x: app.screen.width - 50,
          y: app.screen.height - 50 - crashCurve.current,
        }
      );

      // circle.clear();
      // circle.lineStyle(0);
      // circle.beginFill(0x000000);
      // circle.drawCircle(point1.x, point1.y, 5);
      // circle.endFill();

      // circle2.clear();
      // circle2.lineStyle(0);
      // circle2.beginFill(0x000000);
      // circle2.drawCircle(point2.x, point2.y, 5);
      // circle2.endFill();

      const angle = Math.atan((point1.x - point2.x) / (point1.y - point2.y));
      rocket.position = point1;
      rocket.rotation = -angle;

      crashLine.clear();

      crashLine.lineTextureStyle({ width: 5, texture: gradTexture });
      // crashLine.lineStyle(5, 0xaa0000, 1);
      crashLine.bezierCurveTo(
        0,
        0,
        app.screen.width - 200,
        0,
        app.screen.width - 100,
        -crashCurve.current
      );
    });

    stage.current.appendChild(app.view);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCrash((crash) => (crash < 265 ? (crash += 1) : crash));
    }, 10);
  }, []);

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
        <S.gameCanvas className="stage" ref={stage}></S.gameCanvas>
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
