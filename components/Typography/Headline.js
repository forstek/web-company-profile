import React from 'react'
import styled from 'styled-components'

const BlackText = styled.h3`
        color: #323232;
        font-weight: bold;
    `;

const OrangeText = styled.h3`
        color: #fc6f20;
        font-weight: bold;
        white-space: pre;
    `;

const Headline = ({children}) => {

    const splittedText = children.split(" ");
    const blackText = splittedText.slice(0, -1).join(" ")
    const orangeText = " " + splittedText[splittedText.length-1]

    return (
        <div className="d-flex align-items-center w-100 justify-content-center">
            <BlackText>{blackText}</BlackText>
            <OrangeText>{orangeText}</OrangeText>
        </div>
        
    )

}

export default Headline