import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Boom from "../videos/boom.mp4"

const Banner = () => {
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
                    <div className="main-text">AZIZ BOUGHDIR</div>
                </div>
                <div className="scroll">
                  <Link to="/work-page">Discover Work  <FontAwesomeIcon className="icon" icon="angle-right" /></Link>
                </div>
                <div className="fixed-text">Contemporary Artist</div>
            </div>
        </div>   
    )
}
export default Banner