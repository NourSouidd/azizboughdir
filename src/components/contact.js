import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {StyledContainer} from './header'

const StyledContact = styled.div`

`
const StyledMainText = styled.div`

`
const StyledFixedText = styled.div`
`


const Contact = () => {
    return (
        <StyledContact>
            <StyledContainer>
              <form name="contact" method="POST" data-netlify="true">
                <p>
                  <label>Name: <input type="text" name="name" /></label>
                </p>
                <p>
                  <label>Email: <input type="email" name="email" /></label>
                </p>
                <p>
                  <label>Subject: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </StyledContainer>
        </StyledContact>
    )
}
export default Contact
