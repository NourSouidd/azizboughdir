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
                <form method="post" action="#">
                    <label>
                        Name
                        <input type="text" name="name" id="name" />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" id="email" />
                    </label>
                    <label>
                        Subject
                        <input type="text" name="subject" id="subject" />
                    </label>
                    <label>
                        Message
                    <textarea name="message" id="message" rows="5" />
                    </label>
                    <button type="submit">Send</button>
                    <input type="reset" value="Clear" />
                </form>
            </StyledContainer>
        </StyledContact>   
    )
}
export default Contact