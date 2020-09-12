import React from "react"
import { Link } from "gatsby"
import Boom from "../videos/boom.mp4"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { distribute } from "gsap/gsap-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className="prj">
            <div className="container">
                <div className="prj-content">
                  <video
                    muted
                    autoPlay
                    loop
                  >
                    <source 
                      src={Boom}
                      type="video/mp4"
                    />
                  </video>
                  <div className="prj-imgs">
                    <Img fluid={data.firstpro.childImageSharp.fluid} />
                    <Img fluid={data.secondpro.childImageSharp.fluid} />
                    <Img fluid={data.thirdpro.childImageSharp.fluid} />
                  </div>
                  <div className="prj-more">
                    <div className="prj-desc">
                        <div className="prj-title">
                         <h1>Foom</h1>
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
                <div className="btn-red">
                  <Link className="linkto" to="/emchi-page">Next Work  <FontAwesomeIcon className="icon" icon="angle-right" /></Link>
                </div>
            </div>
        </div>   
    )
}
export default Foom