import React from "react"
import Boom from "../videos/boom.mp4"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import { distribute } from "gsap/gsap-core"

const Banner = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         middlePic: file(relativePath: { eq: "portfolio3.jpg" }) {
    //             childImageSharp {
    //                 fluid(maxWidth: 300) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //         leftPic: file(relativePath: { eq: "portfolio2.jpg" }) {
    //             childImageSharp {
    //                 fluid(maxWidth: 300) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //         rightPic: file(relativePath: { eq: "portfolio4.jpg" }) {
    //             childImageSharp {
    //                 fluid(maxWidth: 300) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `)
    return (
        <div className="banner">
            <video
              id="myVideo"
              loop
              muted
              autoPlay
            >
              <source 
               src={Boom}
               type="video/mp4"
              />
            </video>
            <div className="container">
                <div className="row">
                    <div className="main-text">Aziz Boughdir</div>
                    {/* <div className="side-img left">
                        <Img fluid={data.leftPic.childImageSharp.fluid} />
                    </div>
                    <div className="main-img">
                        <Img fluid={data.middlePic.childImageSharp.fluid} />
                    </div>
                    <div className="side-img right">
                        <Img fluid={data.rightPic.childImageSharp.fluid} />
                    </div> */}
                </div>
                <div className="scroll">
                    <span>Scroll Down</span>
                </div>
                <div className="fixed-title">Graphic Designer<i class="fas fa-circle"></i>Photographer</div>
            </div>
        </div>
        
    )
}
export default Banner