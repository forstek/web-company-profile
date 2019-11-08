import styled from 'styled-components'
import Link from 'next/link'

const ItemElement = styled.span`
color: #888888;
font-size:14px;
transition: all 0.5s ease;
${props => props.link ? ' cursor: pointer;' : ''}

  &:hover {
      color: #fc6f20;
  }
`

export const Item = (props) => {
  return (
    <li>
      {props.link ? <Link href={props.link}> <ItemElement>{props.text}</ItemElement> </Link> : <ItemElement>{props.text}</ItemElement>}
    </li>
  )
}

const ListElement = styled.ul`
    list-style:none;
`

const ListTitle = styled.p`
    color: #323232;
    font-size:14px;
    font-weight:bold;
`

export const VerticalList = ({ children, title }) => {
  return (

    <ListElement>
      <li><ListTitle>{title.toUpperCase()}</ListTitle></li>
      {children}
    </ListElement>

  )
}
