import styled from 'styled-components'

const setVerticalAlign = (align) => {
  switch (align) {
    case 'top':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'bottom':
      return 'flex-end'
    default:
      return 'flex-start'
  }
}

const Element = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: ${props => setVerticalAlign(props.vertical)};
justify-content: center;
height:100%;

& > * { 
  min-width: ${props => props.breakPoint};
  max-width: ${props => props.maxItem ? `calc(100% / ${props.maxItem})` : props.breakPoint};
  flex: 1 0 ${props => props.breakPoint};
}

`

const ResponsiveFlex = (props) => {
  return (
    <Element {...props}>
      {props.children}
    </Element>

  )
}

export default ResponsiveFlex
