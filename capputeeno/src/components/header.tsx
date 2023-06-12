"use client"
import { styled } from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'
import Link from 'next/link'
import { PrimaryInput } from './primary-input'

interface HeaderProps {

}

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 160px;
`
const Logo = styled.a`
color: var(--logo-color);
text-decoration: none;

font-weight: 400;
font-size: 40px;
line-height: 150%;
`


export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo href='/' className={sairaStencil.className}>capputeeno</Logo>
      <div>
        <PrimaryInput placeholder='Procurando por algo específico?'/>
      </div>
    </TagHeader>
  )
} 