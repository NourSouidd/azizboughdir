import React from "react"
import { Link } from "gatsby"
import Boom from "../videos/boom.mp4"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { distribute } from "gsap/gsap-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {StyledBtnRed} from './banner'
import {StyledContainer} from './header'

const StyledProject = styled.div`
  padding: 76px 0;
  position: relative;
  align-items: center;
  height: 100vh;
`

const StyledPrjContent = styled.div`
  width: 100%;
`
const StyledVideo = styled.video`
  width: 74%;
  position: relative;
  left: 10%;
`
const StyledPrjImg = styled.div`
  margin: 40px;
  display: grid;
  column-gap: 216px;
  grid-template-columns: 1fr 1fr 1fr;
`
const StyledPrjMore = styled.div`
  margin: 34px 146px;
  display: flex;
  justify-content: space-between;
`
const StyledPrjDesc = styled.div`
  width: 50%;
`
const StyledPrjtext = styled.p`
  margin: 6px;
  color: #989898;
`
const StyledPrjtitle = styled.p`
  display: flex;
  align-items: center;
`

const StyledTitle = styled.h1`
  margin-bottom: 0;
`

const StyledPrjSpan = styled.span`
  padding: 8px;
  background-color: #d00000;
  font-weight: 700;
  font-size: 14px;
  margin-left: 20px;
  margin-top: 22px;
  border-radius: 4px;
`
const StyledPrjprg = styled.p`
  width: 50%;
`

const Foom = () => {
    const data = useStaticQuery(graphql`
    query {
        firstpro: file(relativePath: { eq: "foom1.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        secondpro: file(relativePath: { eq: "foom2.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        thirdpro: file(relativePath: { eq: "foom3.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)
    return (
        <StyledProject>
            <StyledContainer>
                <StyledPrjContent>
                  <StyledVideo
                    muted
                    autoPlay
                    loop
                  >
                    <source
                      src={Boom}
                      type="video/mp4"
                    />
                  </StyledVideo>
                  <StyledPrjImg>
                    <Img fluid={data.firstpro.childImageSharp.fluid} />
                    <Img fluid={data.secondpro.childImageSharp.fluid} />
                    <Img fluid={data.thirdpro.childImageSharp.fluid} />
                  </StyledPrjImg>
                  <StyledPrjMore>
                    <StyledPrjDesc>
                        <StyledPrjtitle>
                         <StyledTitle>Foom</StyledTitle>
                         <StyledPrjSpan>2020</StyledPrjSpan>
                        </StyledPrjtitle>
                        <StyledPrjtext>Animation Video</StyledPrjtext>
                    </StyledPrjDesc>
                    <StyledPrjprg>
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
                    </StyledPrjprg>
                  </StyledPrjMore>
                </StyledPrjContent>
                <StyledBtnRed className="btnbottom">
                  <Link className="linkto" to="/emchi-page">Next Work  <FontAwesomeIcon className="icon" icon="angle-right" /></Link>
                </StyledBtnRed>
            </StyledContainer>
        </StyledProject>
    )
}
export default Foom
