import styled from 'styled-components'
import Flexbox from 'components/Flexbox/Flexbox'

const Icon = styled.img`
  width: 65px;
  margin-right: 15px;
`

const Number = styled.p`
  font-weight: 300;
  color: #323232;
  margin-bottom: 8px;
`

const Bold = styled.span`
  font-weight: bold !important;
`

const Title = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  color: #FC6F20;
  margin-bottom:0;
`

const Description = styled.p`
  font-size:14px;
  line-height: 1.6;
`

const HomeItem = (props) => {
  return (
    <Flexbox horizontal='center' equal style={{ marginBottom: '24px' }}>
      <Icon src={props.icon} alt='Item' />
      <div>
        <Number><Bold>{props.number}</Bold> / <Title>{props.title}</Title></Number>
        <Description>{props.children}</Description>
      </div>
    </Flexbox>
  )
}

export default HomeItem
