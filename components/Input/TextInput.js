import styled from 'styled-components'

const Wrapper = styled.div`
color: #323232;
padding-left: 15px;
padding-right: 15px;
width:100%;
`

const TextInput = (props) => {
  return (
    <Wrapper {...props}>
      <input className='form-control' type={props.type} id={props.id} name={props.id} placeholder={props.label} />
    </Wrapper>
  )
}

export default TextInput
