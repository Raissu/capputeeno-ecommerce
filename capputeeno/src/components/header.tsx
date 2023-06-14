"use client";
import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import Link from "next/link";
import { PrimaryInput, PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";

interface HeaderProps {}

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;
const Logo = styled.a`
  color: var(--logo-color);
  text-decoration: none;

  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo href="/" className={sairaStencil.className}>
        capputeeno
      </Logo>
      <div>
        <PrimaryInputWSearchIcon placeholder="O que voce está procurando ?" />
        <CartControl />
      </div>
    </TagHeader>
  );
}
