"use client";
import { Saira_Stencil_One } from "next/font/google";
import { CartControl } from "../cart-control";
import { TagHeader, Logo } from "./styles";
import { PrimaryInputWSearchIcon } from "./primary-input";

interface HeaderProps {}

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo href="/" className={sairaStencil.className}>
        capputeeno
      </Logo>
      <div>
        <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  );
}
