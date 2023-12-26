import type { ReactNode } from "react";
import * as S from "./container.styles";

export default function Container({
  children = undefined,
  className = undefined,
  onClick = undefined,
}: {
  children?: ReactNode | undefined;
  className?: string;
  onClick?: any;
}) {
  return (
    <S.container className={className} onClick={onClick}>
      {children}
    </S.container>
  );
}
