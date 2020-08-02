import React from "react"
import { Link } from "gatsby"
import Boom from "../videos/boom.mp4"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Foom = () => {
    return (
        <div className="prj">
            <div className="container">
                <div className="prj-content">
                  <video
                    muted
                    autoPlay
                    controls
                  >
                    <source 
                      src={Boom}
                      type="video/mp4"
                    />
                  </video>
                  <div className="prj-imgs">

                  </div>
                </div>

            </div>
        </div>   
    )
}
export default Foom