import React from 'react'
import { pure } from 'recompose'
import styled from 'styled-components'

import { purple } from 'constants/color'

const PurpleSpan = styled.span`
  color: ${purple};
  font-weight: bold;
`

const PurpleText = ({ text }) => (
  <PurpleSpan>{text}</PurpleSpan>
)

export default pure(PurpleText)
