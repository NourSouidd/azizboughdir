import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { distribute } from "gsap/gsap-core"
import styled from 'styled-components'
import {StyledContainer} from './header'

const StyledWork = styled.div`
    padding: 76px 0;
    position: relative;
    align-items: center;
    height: 100%;
`
const InnerWork = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Content = styled.div`
    width: 100vw;
    margin: 30px;
`
const Projects = styled.div`
    width: 100%;
    display: grid;
    column-gap: 55px;
    row-gap: 55px;
    grid-template-columns: 1fr 1fr;
    & a {
        text-decoration: none;
    }
`
const Project = styled.link`
    color: $white;
    text-align: center;
    border: 3px solid $white;
    border-radius: 4px;
    transition: all .2s ease-in-out;
    &:hover {
    transform: scale(1.1);
    z-index: 9;
    }
`

const Work = () => {
    const data = useStaticQuery(graphql`
        query {
            firstWork: file(relativePath: { eq: "boom.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            secondWork: file(relativePath: { eq: "marche.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            thirdWork: file(relativePath: { eq: "seminaire.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
  return(
    <StyledWork>
        <StyledContainer>
            <InnerWork>
                <Content>
                   <Projects>
                       <Project to="/foom-page">
                          <Img fluid={data.firstWork.childImageSharp.fluid} />
                          <h1>Foom</h1>
                       </Project>
                       <Project to="/emchi-page">
                          <Img fluid={data.secondWork.childImageSharp.fluid} />
                          <h1>Imchi</h1>
                       </Project>
                       <Project to="/seminaire-page">
                          <Img fluid={data.thirdWork.childImageSharp.fluid} />
                          <h1>Naissance Oculaire</h1>
                       </Project>
                    </Projects>
                </Content>
            </InnerWork>
        </StyledContainer>
    </StyledWork> 

  )
}

export default Work