import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import Azbg from "../videos/about.mp4"
import {StyledContainer} from './header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledAbout = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  background-color: $black;
  top: 0px;
  z-index: 10;
`
const StyledInnerAbout = styled.div`
    padding: 76px 0;
    position: relative;
    align-items: center;
    height: 100vh;
`

const StyledContent = styled.div`
    display: flex;
    align-items: center;
`
const StyledVideo = styled.video`
    width: 40vw;
    height: 90vh;
`
const StyledDescription = styled.div`
    padding: 20px;
    margin: 20px;
`
const StyledList = styled.div`
`

const About = () => (
  <StyledAbout>
    <StyledContainer>
        <StyledInnerAbout>
            <StyledContent>
                <StyledVideo
                    muted
                    autoPlay
                    loop
                >
                    <source 
                        src={Azbg}
                        type="video/mp4"
                    />
                </StyledVideo>
                <StyledDescription>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but 
                        also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised 
                        in the 1960s with the release of Letraset sheets 
                        containing Lorem Ipsum passages, and more recently 
                        with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                    <StyledList>
                    </StyledList>
                </StyledDescription>

            </StyledContent>
        </StyledInnerAbout>
    </StyledContainer>
  </StyledAbout>
)

export default About