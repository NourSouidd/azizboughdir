import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import Azbg from "../videos/about.mp4"
import {StyledContainer} from './header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
    text-align: center;
    margin-top: 10px;
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
                      Aziz Boughedir holds a degree in plastic art obtained at l'Institut supérieur des beaux-arts de Tunis.
                      He subsequently supports a Master of Research in the same Institute where he is interested in contemporary
                      Tunisian art galleries. Since January 2020, Aziz has been a PhD candidate at l'Université de Montréal.
                      His research interests focus on the valorization of contemporary Arab art and art market systems.
                      His thesis project focuses on the emergence and evolution of the contemporary Arab art market, taking as a
                      case study the Tunisian art market from the protectorate period to the present day.
                    </p>
                    <StyledList>
                    <Link className="linkto coicon" target="_blank" to="https://www.linkedin.com/in/aziz-boughedir-44615b1ab/"><FontAwesomeIcon icon={["fab", "linkedin"]}/></Link>
                    <Link className="linkto coicon" target="_blank" to="https://fr-fr.facebook.com/azizboughedir"><FontAwesomeIcon icon={["fab", "facebook-square"]}/></Link>
                    <Link className="linkto coicon" target="_blank" to="/"><FontAwesomeIcon icon={faEnvelope} /></Link>
                    </StyledList>
                </StyledDescription>

            </StyledContent>
        </StyledInnerAbout>
    </StyledContainer>
  </StyledAbout>
)

export default About
