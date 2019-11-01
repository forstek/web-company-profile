import React from 'react'
import { BasicButton } from './ButtonStyle'

const Button = (props) => (
  <BasicButton {...props}>{props.text}</BasicButton>
)

export default Button
