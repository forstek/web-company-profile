import styled from 'styled-components'

const Wrapper = styled.div`
color: #323232;
padding-left: 15px;
padding-right: 15px;
width: 100%;
`

const TextArea = (props) => {
  return (
    <Wrapper {...props}>
      <textarea className='form-control' id={props.id} name={props.id} placeholder={props.label} />
    </Wrapper>
  )
}

export default TextArea
