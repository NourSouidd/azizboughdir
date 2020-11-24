import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {StyledContainer} from './header'

const StyledContact = styled.div`
  padding: 76px 0px;
  position: relative;
  height: 100%;
`
const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
    border-bottom: 2px solid white;

`

const StyledFormName = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

`

const Contact = () => {
    return (
        <StyledContact>
            <StyledContainer>
              <form className="form" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <StyledFormName>
                  <StyledForm>
                  <label>First Name</label>
                    <input className="input" type="text" name="first-name" />
                  </StyledForm>
                  <StyledForm>
                    <label>Last Name</label>
                    <input className="input" type="text" name="last-name" />
                  </StyledForm>
                </StyledFormName>
                <StyledForm>
                  <label>Email</label>
                  <input className="input" type="email" name="email" />
                </StyledForm>
                <StyledForm>
                  <label>Message</label>
                  <textarea className="input texta" name="message"></textarea>
                </StyledForm>
                  <button className="contact-btn" type="submit">Send</button>
              </form>
            </StyledContainer>
        </StyledContact>
    )
}
export default Contact
