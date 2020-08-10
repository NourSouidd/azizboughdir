import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { distribute } from "gsap/gsap-core"
import styled from 'styled-components'
import StyledContainer from './header'

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
                <div className="content">
                   <div className="projects">
                       <Link to="/foom-page" className="project">
                          <Img fluid={data.firstWork.childImageSharp.fluid} />
                          <h1>Foom</h1>
                       </Link>
                       <Link to="/emchi-page" className="project">
                          <Img fluid={data.secondWork.childImageSharp.fluid} />
                          <h1>Imchi</h1>
                       </Link>
                       <Link to="/seminaire-page" className="project">
                          <Img fluid={data.thirdWork.childImageSharp.fluid} />
                          <h1>Naissance Oculaire</h1>
                       </Link>
                    </div>
                </div>
            </InnerWork>
        </StyledContainer>
    </StyledWork> 

  )
}

export default Work