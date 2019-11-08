import styled from 'styled-components'
import Layout from 'components/Layout/GuestLayout'
import Headline from 'components/Typography/Headline'
import Paragraph from 'components/Typography/Paragraph'
import BasicButton from 'components/Button/Button'
import HomeItem from 'components/Item/HomeItem'
import ProjectItem from 'components/Item/ProjectItem'
import TextInput from 'components/Input/TextInput'
import TextArea from 'components/Input/TextArea'
import Flexbox from 'components/Flexbox/Flexbox'
import ResponsiveFlex from 'components/Flexbox/ResponsiveFlex'
import Footer from 'components/Layout/Footer'

const Section = styled.div`
  width:100%;
  margin-bottom: 25px;
  display:flex;
  justify-content: center;
  flex-direction: column;
`

const Index = () => (

  <Layout>
    <Section style={{ minHeight: '500px' }}>
      <Flexbox direction='row' horizontal='between' vertical='center'>
        <Flexbox direction='column' horizontal='center' vertical='center'>
          <Paragraph style={{ fontSize: '1.5rem' }}> We know you have idea, and
            <br /> We know that build your idea takes
            <br /> a lot of time and energy, so
            <br /> We here to help you!
          </Paragraph>
          <BasicButton primary round text="Let's get started" style={{ display: 'block', margin: 'auto' }} />
        </Flexbox>
        <img src='static/images/illustration-1.png' alt='' style={{ maxWidth: '500px' }} />
      </Flexbox>
    </Section>
    <Section>
      <Headline>We are Forstek</Headline>
      <Paragraph>We provide reliable and affordable development team to help you, right now.</Paragraph>
      <ResponsiveFlex breakPoint='300px'>
        <HomeItem icon='static/images/calendar.svg' number='01' title='reliability'>
          Many inexperience and unreliable freelancers out there, but the best talents are with us.
        </HomeItem>
        <HomeItem icon='static/images/checking.svg' number='02' title='time saving'>
          You do not have to worry about doing interview and other time consuming of recruiting process, we have done it for you.
        </HomeItem>
        <HomeItem icon='static/images/reliability.svg' number='03' title='quality'>
        We train our team seriously to meet our standard.
        </HomeItem>
      </ResponsiveFlex>
    </Section>
    <Section>
      <Headline>How It Works</Headline>
      <Paragraph>We provide reliable and affordable development team to help you, right now.</Paragraph>
    </Section>
    <Section>
      <Headline>Our Works</Headline>
      <Paragraph>Please open these websites from desktop browser for best experience.</Paragraph>
      <ResponsiveFlex breakPoint='350px'>
        <ProjectItem name='First Project' src='static/images/project-1.jpg' />
        <ProjectItem name='Second Project' src='static/images/project-2.jpg' />
        <ProjectItem name='Third Project' src='static/images/project-1.jpg' />
        <ProjectItem name='Fourth Project' src='static/images/project-2.jpg' />
        <ProjectItem name='Fifth Project' src='static/images/project-1.jpg' />
        <ProjectItem name='Sixth Project' src='static/images/project-2.jpg' />
      </ResponsiveFlex>
      <BasicButton secondary round text='View more' style={{ display: 'block', margin: 'auto' }} />
    </Section>
    <Section>
      <Headline>Get In Touch</Headline>
      <Paragraph>Let us reach you to give further information</Paragraph>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.399531925207!2d107.64796674914139!3d-6.962106743610052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e836139e66c5%3A0x340f0ace4b5aeff9!2sTopindo%20Buah%20Batu%20Residence!5e0!3m2!1sid!2sid!4v1573003026449!5m2!1sid!2sid'
        height='450'
        frameBorder='0'
        style={{ border: 0, width: '100%' }}
        allowFullScreen=''
      />
      <Flexbox wrap='2'>
        <Flexbox direction='column'>
          <TextInput type='text' id='name' label='name' />
          <TextInput className='mt-3' type='email' id='email' label='email' />
          <TextArea className='mt-3' id='email' label='message' />
          <BasicButton primary round text='Submit' className='mr-auto mt-3 d-block' />
        </Flexbox>
      </Flexbox>
    </Section>
    <Section>
      <Footer />
    </Section>
  </Layout>

)

export default Index
