import React from 'react'
import { pure } from 'recompose'
import styled from 'styled-components'

import { orange } from 'constants/color'

const OrangeSpan = styled.span`
  color: ${orange};
  font-weight: bold;
`

const OrangeText = ({ text }) => (
  <OrangeSpan>{text}</OrangeSpan>
)

export default pure(OrangeText)
