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
                  <label>Name: </label>
                  <input type="text" name="name" />
                </p>
                <p>
                  <label>Email: </label>
                  <input type="email" name="email" />
                </p>
                <p>
                  <label>Subject: </label>
                  <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select>
                </p>
                <p>
                  <label>Message: </label>
                  <textarea name="message"></textarea>
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
