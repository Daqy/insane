import { Outlet } from "react-router-dom";
import * as S from "./nav.styles";
import { routes } from "../../router/routes";
import { useSelector } from "react-redux";
import { useChat } from "../../store/chat";

export default function Nav() {
  const isChatOpen = useSelector(useChat);
  return (
    <S.container>
      <S.logo>
        <img src="" alt="" />
      </S.logo>
      <S.topNav>nav</S.topNav>
      <S.bottomNav>
        {routes.map((route) => {
          return (
            <S.navigate to={route.path} key={route.name}>
              {route.name}
            </S.navigate>
          );
        })}
      </S.bottomNav>
      <S.main>
        <Outlet />
        {isChatOpen ? <S.chat></S.chat> : ""}
      </S.main>
    </S.container>
  );
}
