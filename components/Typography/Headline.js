import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 4rem !important;
  margin-bottom: 20px;
`

const BlackText = styled.h1`
        color: #323232;
        font-weight: bold;
    `

const OrangeText = styled.h1`
        color: #fc6f20;
        font-weight: bold;
        white-space: pre;
    `

const Headline = ({ children }) => {
  const splittedText = children.split(' ')
  const blackText = splittedText.slice(0, -1).join(' ')
  const orangeText = ' ' + splittedText[splittedText.length - 1]

  return (
    <Container className='d-flex align-items-center w-100 justify-content-center'>
      <BlackText>{blackText}</BlackText>
      <OrangeText>{orangeText}</OrangeText>
    </Container>

  )
}

export default Headline
