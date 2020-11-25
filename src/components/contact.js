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

const StyledForm = styled.form`
  width: 30%;
  margin: 4% 32%;
`
const StyledFormBlock = styled.div`
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

const StyledInput = styled.input`
  border: none;
  height: 25px;
  margin-bottom: 9px;
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  border-radius: 0px;
  appearance: none;
`

const StyledTextarea = styled.textarea`
  border: none;
  height: 25px;
  margin-bottom: 9px;
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  border-radius: 0px;
  appearance: none;
  min-height: 120px;
`
const StyledButton = styled.button`
 width: 100%;
 height: 35px;
 font-size: 16px;
 background: #d00000;
 color: white;
 font-family: Roboto;
 border: none;
 font-weight: 300;
 cursor: pointer;
`


const Contact = () => {
    return (
        <StyledContact>
            <StyledContainer>
              <StyledForm name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <StyledFormName>
                  <StyledFormBlock>
                  <label>First Name</label>
                    <StyledInput type="text" name="first-name" />
                  </StyledFormBlock>
                  <StyledFormBlock>
                    <label>Last Name</label>
                    <StyledInput type="text" name="last-name" />
                  </StyledFormBlock>
                </StyledFormName>
                <StyledFormBlock>
                  <label>Email</label>
                  <StyledInput type="email" name="email" />
                </StyledFormBlock>
                <StyledFormBlock>
                  <label>Message</label>
                  <StyledTextarea name="message"></StyledTextarea>
                </StyledFormBlock>
                  <StyledButton className="contact-btn" type="submit">Send</StyledButton>
              </StyledForm>
            </StyledContainer>
        </StyledContact>
    )
}
export default Contact
