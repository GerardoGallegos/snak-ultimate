import React from 'react'
import styled from 'styled-components'
import { Link as UnstyledLink } from 'react-router-dom'
import _View from '../../components/View'

const View = styled(_View)`
  max-width: 1280px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 4rem;
  color: #FFF;
  font-weight: 100;
  margin: 0;
`

const Subtitle = styled.h2`
  color: rgb(2, 194, 215);
  color: #CDDC39;
  font-size: 2rem;
  font-weight: 100;
  margin: 0;
`

const Header = styled.div`
  margin-top: 4em;
`

const Link = styled(UnstyledLink)`
  text-decoration: none;
  color: #FFF;
  background-color: #548d19;
  padding: .6em 1.7em;
  display: inline-block;
  font-size: 22px;
  border-radius: 35px;
  margin-top: 1em;
  box-shadow: 1px -1px 189px 5px #5da80b;
`

const HomePage = () => (
  <View>
    <Header>
      <Title>Snak Ultimate</Title>
      <Subtitle>Online editor for create tutorials</Subtitle>
      <Link to='/creator/new'>Create New</Link>
    </Header>
  </View>
)

export default HomePage
