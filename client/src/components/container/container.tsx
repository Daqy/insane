import type { ReactNode } from "react";
import * as S from "./container.styles";

export default function Container({
  children = undefined,
  className = undefined,
}: {
  children?: ReactNode | undefined;
  className?: string;
}) {
  return <S.container className={className}>{children}</S.container>;
}
