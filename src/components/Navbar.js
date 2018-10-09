import React from 'react'
import styled from 'styled-components'
import { NavLink as UnstyledLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: 55px;
  font-family: Serif;
  font-weight: 500;
  background: #272729;
  color: white;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const Link = styled(UnstyledLink)`
  color: #FFF;
  text-decoration: none;
  padding: 0 1em;
  font-family: 'K2D', sans-serif;
  font-size: 20px;
  opacity: 0.6;

  :hover {
    opacity: 0.8;
  }
`

const Img = styled.img`
  width: 35px;
`

const active = {
  color: '#98D400',
  opacity: '1'
}

const Navbar = () => (
  <Wrapper>
    <Link exactly='true' to='/' activeStyle={active}><Img src={Logo} /></Link>
    <Link exactly='true' to='/snaks' activeStyle={active}>Snaks</Link>
    <Link exactly='true' to='/snak/ex1' activeStyle={active}>Editor</Link>
  </Wrapper>
)

export default Navbar
