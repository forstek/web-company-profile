import styled from 'styled-components'
import Logo from 'components/Company/Logo'
import Flexbox from 'components/Flexbox/Flexbox'
import ResponsiveFlex from 'components/Flexbox/ResponsiveFlex'
import { VerticalList, Item } from 'components/List/VerticalList'

const Description = styled.p`
font-size: 14px;
margin-top: 14px;
margin-bottom: 0;
color: #888888;
`

const Footer = () => {
  return (
    <ResponsiveFlex breakPoint='250px' maxItem='4'>
      <Flexbox direction='column' vertical='center' style={{ marginBottom: '24px' }}>
        <Logo />
        <Description>Help startups craft best products</Description>
      </Flexbox>
      <VerticalList title='contact us'>
        <Item text='+62 813 2403 5623' />
        <Item text='forstek.co@gmail.com' />
        <Item text='Topindo Buah Batu Residence II No.14, Bandung' />
      </VerticalList>
      <VerticalList title='company'>
        <Item link='/' text='About' />
        <Item link='/' text='Project' />
        <Item link='/' text='Blog' />
        <Item link='/' text='Career' />
      </VerticalList>
      <VerticalList title='information'>
        <Item link='/' text='Terms & Conditions' />
        <Item link='/' text='Support Center' />
        <Item link='/' text='Press Info' />
      </VerticalList>
    </ResponsiveFlex>
  )
}

export default Footer
