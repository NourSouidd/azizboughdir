import React from "react"
import { Link } from "gatsby"
import Marche from "../videos/marche.mp4"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { distribute } from "gsap/gsap-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {StyledBtnRed} from './banner'

const Emchi = () => {
    const data = useStaticQuery(graphql`
    query {
        firstpro: file(relativePath: { eq: "imchi1.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        secondpro: file(relativePath: { eq: "emchi2.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        thirdpro: file(relativePath: { eq: "emchi3.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        forthpro: file(relativePath: { eq: "imchi4.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)
    return (
        <div className="prj">
            <div className="container">
                <div className="prj-content">
                  <video
                    muted
                    autoPlay
                    loop
                  >
                    <source 
                      src={Marche}
                      type="video/mp4"
                    />
                  </video>
                  <div className="prj-imgs emchi">
                    <Img fluid={data.firstpro.childImageSharp.fluid} />
                    <Img fluid={data.secondpro.childImageSharp.fluid} />
                    <Img fluid={data.thirdpro.childImageSharp.fluid} />
                    <Img fluid={data.forthpro.childImageSharp.fluid} />
                  </div>
                  <div className="prj-more">
                    <div className="prj-desc">
                        <div className="prj-title">
                         <h1>Emchi</h1>
                         <span>2020</span>
                        </div>
                        <p>Animation Video</p>
                    </div>
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
                  </div>
                </div>
                <StyledBtnRed>
                  <Link className="linkto" to="/seminaire-page">Next Work  <FontAwesomeIcon className="icon" icon="angle-right" /></Link>
                </StyledBtnRed>
            </div>
        </div>   
    )
}
export default Emchi