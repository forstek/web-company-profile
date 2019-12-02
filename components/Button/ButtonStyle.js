import styled from 'styled-components'
import { darken } from 'polished'
import { purple } from 'constants/color'

export const BasicButton = styled.button`
  background: ${props => props.primary ? purple : '#FFFFFF'};
  border: ${props => props.primary ? 'none' : '1px solid #323232'};
  width: 185px;
  height: 55px;
  color: ${props => props.primary ? '#FFFFFF' : '#323232'};
  border-radius : ${props => props.round ? '6px' : 0};
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: ${props => props.primary ? darken(0.1, purple) : '#323232'};
    color: white;
  }

  &:active {
    background: ${props => props.primary ? darken(0.15, purple) : darken(0.15, '#323232')};
    outline: none;
  }
`
