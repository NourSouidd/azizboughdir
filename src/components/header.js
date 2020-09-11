import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const StyledHeader = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  background-color: $black;
  top: 0px;
  z-index: 10;
`

export const StyledContainer = styled.div`
  width: 1640px;
  min-width: 1640px;
  margin: 0 auto;
  @media (max-width: 1440px) {
      width: 1280px;
      min-width: 1280px;
  }
  @media (max-width: 1280px) {
      width: 976px;
      min-width: 976px;
  }
  @media (max-width: 976px) {
      width: 768px;
      min-width: 768px;
  }
`

const StyledInnerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`

const StyledLogo = styled.div`
  & a {
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 1.5px;
    color: $white;
  }
`
const StyledNavigation = styled.div`
  & nav {
    & a {
      margin: 0 20px;
      text-decoration: none;
      letter-spacing: 1.75px;
      text-transform: uppercase;
      font-size: 0.75rem;
      color: $white;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
`

const LinkHeader = styled.a`
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 1.5px;
  color: $white;
`

const Header = () => (
  <StyledHeader>
    <StyledContainer>
      <StyledInnerHeader>
        <StyledLogo>
          <LinkHeader to="/">BOUGHDIR</LinkHeader>
        </StyledLogo>
        <StyledNavigation>
          <nav>
            <LinkHeader to="/about-page">About</LinkHeader>
            <LinkHeader to="/work-page">Work</LinkHeader>
            <LinkHeader to="/contact">Contact</LinkHeader>
          </nav>
        </StyledNavigation>
      </StyledInnerHeader>
    </StyledContainer>
  </StyledHeader>
)

export default Header
