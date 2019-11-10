import styled from 'styled-components'
import { darken } from 'polished'

export const BasicButton = styled.button`
  background: ${props => props.primary ? '#FC6F20' : '#FFFFFF'};
  border: ${props => props.primary ? 'none' : '1px solid #323232'};
  width: 185px;
  height: 55px;
  color: ${props => props.primary ? '#FFFFFF' : '#323232'};
  border-radius : ${props => props.round ? '6px' : 0};
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: ${props => props.primary ? darken(0.1, '#FC6F20') : '#323232'};
    color: white;
  }

  &:active {
    background: ${props => props.primary ? darken(0.15, '#FC6F20') : darken(0.15, '#323232')};
    outline: none;
  }
`
