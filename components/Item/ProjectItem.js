// import Link from 'next/link'
import styled from 'styled-components'
import Flexbox from 'components/Flexbox/Flexbox'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Thumbnail = styled.img`
  width:100%;
  border-radius: 6px;
  box-shadow: 0px 6px 10px rgba(96, 125, 139, 0.25);
`

const Name = styled.p`
  color:#323232;
  font-size:14px;
  font-weight:bold;
  margin-bottom: 0;
  flex:1;
`

const Project = (props) => (
  <Flexbox direction='column' style={{ marginBottom: '25px' }}>
    <Thumbnail src={props.src} alt='Project 1' />
    <Flexbox className='mt-2 w-100 px-0' direction='row' vertical='center' equal>
      <Name>{props.name}</Name>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        <a className='nav-link c-primary font-weight-bold px-0' target='_blank' style={{ color: '#fc6f20' }}>
          <FaExternalLinkAlt />
          <p className='ml-2 mb-0 d-inline-block'>View</p>
        </a>
      </a>
    </Flexbox>
  </Flexbox>
)

export default Project
