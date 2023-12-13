import * as S from "./index.styles";
import IconText from "../../components/iconText/iconText";
import { useRef } from "react";

export default function Crash() {
  const players = [
    {
      name: "Daqy",
    },
    { name: "jimmy" },
    { name: "jimmy" },
    { name: "jimmy" },
    { name: "jimmy" },
    { name: "jimmy" },
    { name: "jimmy" },
    { name: "jimmy" },
  ];

  const inventory = [
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
    { name: "usp-s" },
  ];

  const selectedItems = [
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
    { price: "0.23" },
  ];

  const playersDom = useRef();
  const inventoryDom = useRef();
  const gameInventoryDom = useRef();

  return (
    <S.container>
      <S.inventory>
        <S.inventoryHeader>
          <p>
            Total: <span style={{ color: "white" }}>$1928</span>
          </p>
          <p>
            Selected: <span style={{ color: "white" }}>$12.45</span>
          </p>
          <p>
            <input type="checkbox" />
            <span>All</span>
          </p>
        </S.inventoryHeader>
        <S.itemContainer>
          <S.inventorySlider>
            $0
            <input type="range" />
            $845
          </S.inventorySlider>
          <S.items ref={inventoryDom}>
            {inventory.map((item, index) => {
              return (
                <S.item key={index}>
                  <S.itemHeader>
                    <span>ww</span>
                  </S.itemHeader>
                  <S.itemImage>
                    <img
                      src="https://raw.githubusercontent.com/ByMykel/CSGO-API/efe25483a04a03414dea9c61d4b0e958a373cdfd/public/images/econ/default_generated/weapon_deagle_hy_ddpat_urb_light.png"
                      alt=""
                    />
                  </S.itemImage>
                  <S.itemInfo>
                    <h3>{item.name}</h3>
                    <p>$45.33</p>
                  </S.itemInfo>
                </S.item>
              );
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
          <button>open</button>
        </S.gameHeader>
      </S.gameContainer>

      <S.gameMenu>
        <S.gameMenuInput>
          <p>Auto cashout (multiplier)</p>
          <input type="text" />
        </S.gameMenuInput>
        <S.gameButton>Join next game</S.gameButton>
        <S.gameInventory ref={gameInventoryDom}>
          {selectedItems.map((item, index) => {
            return (
              <S.inventoryItems key={index}>
                <S.inventoryItemImage>
                  <img
                    src="https://raw.githubusercontent.com/ByMykel/CSGO-API/efe25483a04a03414dea9c61d4b0e958a373cdfd/public/images/econ/default_generated/weapon_deagle_hy_ddpat_urb_light.png"
                    alt=""
                  />
                </S.inventoryItemImage>
                <S.invetoryItemPrice>${item.price}</S.invetoryItemPrice>
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
              text: "12",
              icon: <></>,
            }}
          </IconText>
          <IconText>
            {{
              title: "bank",
              text: "$374",
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

                  <S.playerBet>$25</S.playerBet>
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
