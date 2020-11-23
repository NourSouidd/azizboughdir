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
  display: grid;
  grid-template-rows: 1fr 1fr;

`

const StyledFormName = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;

`
const StyledMainText = styled.div`

`
const StyledFixedText = styled.div`
`


const Contact = () => {
    return (
        <StyledContact>
            <StyledContainer>
              <form className="form" name="contact" method="POST" data-netlify="true">
                <StyledFormName>
                  <StyledForm>
                  <label>First Name</label>
                    <input className="input" type="text" name="firstname" />
                  </StyledForm>
                  <StyledForm>
                    <label>Last Name</label>
                    <input className="input" type="text" name="lastname" />
                  </StyledForm>
                </StyledFormName>
                <StyledForm>
                  <label>Email</label>
                  <input className="input" type="email" name="email" />
                </StyledForm>
                <StyledForm>
                  <label>Message</label>
                  <textarea className="input" name="message"></textarea>
                </StyledForm>
                <StyledForm>
                  <button type="submit">Send</button>
                </StyledForm>
              </form>
            </StyledContainer>
        </StyledContact>
    )
}
export default Contact
