import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import Azbg from "../videos/about.mp4"
import {StyledContainer} from './header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledAbout = styled.div`
    padding: 76px 0px;
    position: relative;
    align-items: center;
    height: 100%;
`
const StyledInnerAbout = styled.div`
    width: 100%;
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
                    <Link className="linkto" to="/"><FontAwesomeIcon icon={["fab", "linkedin"]}/></Link>
                    <Link className="linkto" to="/"><FontAwesomeIcon icon={["fab", "facebook-square"]}/></Link>
                    <Link className="linkto" to="/"><FontAwesomeIcon icon={["fas", "envelope"]} /></Link>
                    </StyledList>
                </StyledDescription>

            </StyledContent>
        </StyledInnerAbout>
    </StyledContainer>
  </StyledAbout>
)

export default About