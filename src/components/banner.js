import React from "react"
import { Link } from "gatsby"
import Boom from "../videos/boom.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {StyledContainer} from './header'

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
`
const StyledVideo = styled.video`
  position: relative;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 90%;
`
const StyledMainText = styled.div`
  font-size: 5.8rem;
  text-transform: uppercase;
  letter-spacing: 42px;
  font-weight: 700;
  color: $white;
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  mix-blend-mode: difference;
  z-index: 9;
  @media(max-width: 1440px) {
    font-size: 4.4rem;
    letter-spacing: 36px;
  }
`
const StyledFixedText = styled.div`
  position: absolute;
  top: 50%;
  left: -40px;
  transform: rotate(-90deg);
  font-weight: 700;
  text-transform: uppercase;
  font-size: .875rem;
  letter-spacing: 1.5px;
  color: $white;
  z-index: 8;
  @media(max-width: 1440px) {
    left: -40px;
  }
`
export const StyledBtnRed = styled.div`
  position: absolute;
  right: 6%;
  z-index: 8;
  bottom: 1;
  & a {
    text-decoration: none;
    font-weight: 700;
    font-size: .875rem;
    letter-spacing: 1.5px;
    mix-blend-mode: difference;
    color: $white;
    border: 4px solid #d00000;
    padding: 18px;
    text-transform: uppercase;
    border-radius: 1px;
    transition: all .2s ease-in-out; 
    .icon {
      font-size: 1.12rem;
      margin: -2px 2px;    
    }
    &:hover {
      animation: none;
      background-color: #d00000;
      transform: scale(1.1);
      .icon {
        animation-name: spin;
        animation-duration: 280ms;
        animation-iteration-count: 1;
        animation-timing-function: linear;
        @keyframes spin {
          from {
              transform:rotate(0deg);
          }
          to {
              transform:rotate(360deg);
          }
        }
      }
    }
  }
`


const Banner = () => {
    return (
        <StyledBanner>
            <StyledVideo
              loop
              muted
              autoPlay
            >
              <source 
               src={Boom}
               type="video/mp4"
              />
            </StyledVideo>
            <StyledContainer>
                <div className="row">
                    <StyledMainText>AZIZ BOUGHDIR</StyledMainText>
                </div>
                <StyledBtnRed>
                  <Link className="linkto" className="linkto" to="/work-page">Discover Work  <FontAwesomeIcon className="icon" icon="angle-right" /></Link>
                </StyledBtnRed>
                <StyledFixedText>Contemporary Artist</StyledFixedText>
            </StyledContainer>
        </StyledBanner>   
    )
}
export default Banner