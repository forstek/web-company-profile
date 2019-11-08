import styled from 'styled-components'
import Logo from 'components/Company/Logo'
import Flexbox from 'components/Flexbox/Flexbox'
import ResponsiveFlex from 'components/Flexbox/ResponsiveFlex'
import { VerticalList, Item } from 'components/List/VerticalList'

const Description = styled.p`
font-size: 14px;
margin-bottom: 0;
color: #888888;
`

const Footer = () => {
  return (
    <ResponsiveFlex breakPoint='250px' maxItem='4'>
      <Flexbox direction='column'>
        <Logo />
        <Description>We help startups craft best product, We understand building startup is hard, time consuming, and need quite a lot of money.</Description>
      </Flexbox>
      <VerticalList title='contact us'>
        <Item text='+6222 8392384' />
        <Item text='contact@forstek.co' />
        <Item text='Topindo Buah Batu Residence II No.14, Bandung' />
      </VerticalList>
      <VerticalList title='company'>
        <Item link='/about' text='About' />
        <Item link='/project' text='Project' />
        <Item link='/blog' text='Blog' />
        <Item link='/career' text='Career' />
      </VerticalList>
      <VerticalList title='information'>
        <Item link='/terms' text='Terms & Conditions' />
        <Item link='/user-guide' text='User Guide' />
        <Item link='/support' text='Support Center' />
        <Item link='/press' text='Press Info' />
      </VerticalList>
    </ResponsiveFlex>
  )
}

export default Footer
