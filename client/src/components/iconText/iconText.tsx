import type { ReactNode } from "react";
import * as S from "./iconText.styles";

export default function iconText({
  children,
}: {
  children: {
    title: string;
    text: string;
    icon: ReactNode;
  };
}) {
  return (
    <S.container>
      <S.iconContainer>{children.icon}</S.iconContainer>
      <S.textContainer>
        <S.text>{children.text}</S.text>
        <S.title>{children.title}</S.title>
      </S.textContainer>
    </S.container>
  );
}
