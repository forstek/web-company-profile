import styled from 'styled-components'
import Layout from 'components/Layout/GuestLayout'
import Headline from 'components/Typography/Headline'
import Paragraph from 'components/Typography/Paragraph'
import BasicButton from 'components/Button/Button'
import EffectButton from 'components/Button/EffectButton'
import HomeItem from 'components/Item/HomeItem'
import ProjectItem from 'components/Item/ProjectItem'
// import TextInput from 'components/Input/TextInput'
// import TextArea from 'components/Input/TextArea'
import Flexbox from 'components/Flexbox/Flexbox'
import ResponsiveFlex from 'components/Flexbox/ResponsiveFlex'
import Footer from 'components/Layout/Footer'
import { OrangeText } from 'components'
import { purple } from 'constants/color'
import {
  // FaPhone,
  FaRegEnvelope
  // FaWhatsapp
} from 'react-icons/fa'

const Section = styled.div`
  width:100%;
  margin-top: ${props => props.marginTop || '5rem'};
  display:flex;
  justify-content: center;
  flex-direction: column;
`

const Index = () => (
  <Layout title='Home'>
    <Section marginTop='2.5rem'>
      {/* <Flexbox direction='row' horizontal='between' vertical='center'> */}
      <ResponsiveFlex vertical='center' breakPoint='375px'>
        <Flexbox direction='column' horizontal='center' vertical='center'>
          <Paragraph style={{ fontSize: '1.6rem' }}>
            We help <OrangeText text='worldwide founders' /> to
            <br /> <OrangeText text='build' /> startup, <OrangeText text='grow' /> company,
            <br /> crafting digital products,
            <br /> develop <OrangeText text='website' /> and <OrangeText text='mobile app' />.
          </Paragraph>
          <a href='#contact-us' style={{ display: 'block', marginTop: '24px' }}>
            <BasicButton
              primary
              round
              text="Let's get started"
              style={{ width: '288px' }}
            />
          </a>
        </Flexbox>
        <img src='static/images/illustration-1.png' alt='' style={{ maxWidth: '500px' }} />
      </ResponsiveFlex>
      {/* </Flexbox> */}
    </Section>
    <Section>
      <Headline>How we help you</Headline>
      <Paragraph style={{ fontSize: '1.3rem', marginBottom: '48px' }}>
        We know you have <OrangeText text='idea' />,
        we understand building your idea
        takes a lot of <OrangeText text='time' /> and <OrangeText text='energy' />, so
        we are here to <OrangeText text='help' /> you!
        <br />
        We provide <OrangeText text='reliable' /> and <OrangeText text='affordable' /> development team to help you, right now.
      </Paragraph>
      <ResponsiveFlex breakPoint='300px'>
        <HomeItem icon='static/images/checking.svg' number='1' title='reliability'>
          When someone from our team is not available,
          there will be someone else assigned to work on your project.
        </HomeItem>
        <HomeItem
          icon='static/images/calendar.svg' number='2' title='time saving'
        >
          You do not have to do time consuming recruiting process, we have done it for you.
          <br /> We kick start building your dreamed product as soon as you agree to work together.
        </HomeItem>
        <HomeItem icon='static/images/reliability.svg' number='3' title='quality'>
        We train our team seriously to meet our standard.
          <br /> We write clean code.
          <br /> We make sure the codebase will always be maintainable and scalable.
        </HomeItem>
        <a href='#contact-us' style={{ display: 'block', marginTop: '24px' }}>
          <BasicButton
            primary
            round
            text="Let's get started"
            style={{ width: '100%' }}
          />
        </a>
      </ResponsiveFlex>
    </Section>
    <Section>
      <Headline>How it works</Headline>
      <Paragraph style={{ fontSize: '1.3rem', marginBottom: '48px' }}>
        Our business process makes it easy for you to <OrangeText text='start' /> the project, <OrangeText text='monitor' />, and give <OrangeText text='feedback' /> within development process.
        <br /> And we are proud solving the <OrangeText text='world problems' /> together with <OrangeText text='you' />.
      </Paragraph>
      <ResponsiveFlex breakPoint='300px'>
        <HomeItem icon='static/images/requirement.svg' number='1' title='requirement'>
          We will gather requirements thoroughly to understand what and how you want it, before we start building it.
        </HomeItem>
        <HomeItem
          icon='static/images/estimate.svg' number='2' title='estimate'
        >
          We estimate every feature properly and prioritize based on your business goal.
        </HomeItem>
        <HomeItem icon='static/images/testing.svg' number='3' title='test'>
          We write test before coding to make sure every pitfall and loophole is anticipated upfront.
        </HomeItem>
      </ResponsiveFlex>
      <ResponsiveFlex breakPoint='300px'>
        <HomeItem icon='static/images/coding.svg' number='4' title='code'>
          When everything is clear, we start building it.
        </HomeItem>
        <HomeItem
          icon='static/images/demo.svg' number='5' title='demo'
        >
          For every completed feature, we demo it to you. Again, to make sure it goes right per your expectation.
        </HomeItem>
        <HomeItem icon='static/images/launch.svg' number='6' title='launch'>
          When all features are completed, it's time to launch your dreamed product.
        </HomeItem>
        <a href='#contact-us' style={{ display: 'block', marginTop: '24px' }}>
          <BasicButton
            primary
            round
            text="Let's get started"
            style={{ width: '100%' }}
          />
        </a>
      </ResponsiveFlex>
    </Section>
    <Section>
      <Headline>Our Works</Headline>
      <Paragraph style={{ fontSize: '1.3rem', marginBottom: '48px' }}>We have worked with <OrangeText text='clients' /> from different <OrangeText text='countries' />. We craft the <OrangeText text='best' /> version of their <OrangeText text='product' />.</Paragraph>
      <ResponsiveFlex breakPoint='300px'>
        <ProjectItem name='Time tracker with screenshots' link='https://bit.ly/timy_app2' src='https://drive.google.com/uc?export=view&id=14WFa7lQYJlOgBhgkpNci5wkGruwYvXGh' />
        <ProjectItem name='Meeting with whiteboard' link='https://bit.ly/ebuxy_app' src='https://drive.google.com/uc?export=view&id=1k7Cl1ctlp6PDjzVQCcklHF4Ggdn264E0' />
        <ProjectItem name='API load testing' link='https://bit.ly/firem_app' src='https://drive.google.com/uc?export=view&id=1qG3F74Sd4lVKzGB-7-a-VGbfPduVJMo-' />
        <ProjectItem name='Messaging app [SG]' link='https://web.voiceoverping.net' src='https://static.wixstatic.com/media/7d888c_b2cc77329b1a4d75b55d1135f033061e~mv2.png/v1/fill/w_262,h_167,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%20from%202019-09-24%2014-22-53.webp' />
        <ProjectItem name='PTT SDK Open Source [SG]' link='https://opensource.voiceping.info' src='https://drive.google.com/uc?export=view&id=1h8XOjOp9VO0C-xRhGLEaQv9b67bc70j0' />
        <ProjectItem name='Personalized outreach [DE]' link='https://app.creatext.ai' src='https://drive.google.com/uc?export=view&id=1QiAU5SG396uVXIV7dgmVr9En9sjgnWaG' />
        <ProjectItem name='Real estate sales [DE]' link='https://app.reo.so' src='https://drive.google.com/uc?export=view&id=1u-dOzmLjl_T8iNXE05R-EOQoA7krhJ8A' />
        <ProjectItem name='Notes app' link='https://notemi.herokuapp.com/' src='https://static.wixstatic.com/media/7d888c_7c48b53bf8a84e40a8ed9ea8df6f16a5~mv2.png/v1/fill/w_197,h_125,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%20from%202019-09-24%2014-32-02.webp' />
        <ProjectItem name='Software management app [CH] (no longer available)' link='https://app.lekka.cloud/' src='https://static.wixstatic.com/media/7d888c_f90512f1a8a34b98a3905e6d1e8b7b60~mv2.png/v1/fill/w_200,h_125,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%20from%202019-09-24%2014-27-53.webp' />
        <ProjectItem name='Matchmaking web [ID]' link='https://satukancinta.com/' src='https://static.wixstatic.com/media/7d888c_0b3cfcc859f54786856359a322cfd32f~mv2.png/v1/fill/w_203,h_125,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%20from%202019-09-24%2014-28-57.webp' />
        <ProjectItem name='Todo list app' link='http://tremind.herokuapp.com/' src='https://static.wixstatic.com/media/7d888c_0e4adcbd957846ffa2d6638ce20e0045~mv2.png/v1/fill/w_200,h_131,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%20from%202019-09-24%2014-34-08.webp' />
        <ProjectItem name='Form builder app [SG] (no longer available)' link='https://bistrip.herokuapp.com/' src='https://static.wixstatic.com/media/7d888c_f622f36c53694e3b9b7bd4df7b4fb669~mv2.png/v1/fill/w_203,h_131,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%20from%202019-09-24%2014-34-47.webp' />
        <ProjectItem name='Masjid web [ID]' link='https://masjid-qs.surge.sh' src='https://drive.google.com/uc?export=view&id=1HSaw-r_YKg-vSXYd_M8cPx8N1Mtwlc3D' />
        <ProjectItem name='Readings' link='https://readings.surge.sh/' src='https://drive.google.com/uc?export=view&id=13MjmzqgPAhg7iIynpnoFPW03t85tT1Iz' />
      </ResponsiveFlex>
      <Paragraph style={{ fontSize: '1rem' }}>Please open these websites from desktop browser for best experience.</Paragraph>
      <ResponsiveFlex breakPoint='300px'>
        <BasicButton secondary round text='View more' style={{ display: 'block', marginTop: '24px' }} />
        <a href='#contact-us' style={{ display: 'block', marginTop: '24px' }}>
          <BasicButton
            primary
            round
            text="Let's get started"
            style={{ width: '100%' }}
          />
        </a>
      </ResponsiveFlex>
    </Section>
    <Section id='contact-us'>
      <Headline>Get In Touch</Headline>
      <Paragraph style={{ fontSize: '1.3rem', marginBottom: '30px' }}>
        We would love to <OrangeText text='discuss' /> further with you. Do not hesitate to <OrangeText text='contact us' /> anytime.
      </Paragraph>
      {/* <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.399531925207!2d107.64796674914139!3d-6.962106743610052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e836139e66c5%3A0x340f0ace4b5aeff9!2sTopindo%20Buah%20Batu%20Residence!5e0!3m2!1sid!2sid!4v1573003026449!5m2!1sid!2sid'
        height='450'
        frameBorder='0'
        style={{ border: 0, width: '100%' }}
        allowFullScreen=''
      /> */}
      <ResponsiveFlex breakpoint='200px'>
        {/* <Flexbox direction='column'>
          <TextInput type='text' id='name' label='name' />
          <TextInput className='mt-3' type='email' id='email' label='email' />
          <TextArea className='mt-3' id='email' label='message' />
          <BasicButton primary round text='Submit' className='mr-auto mt-3 d-block' />
        </Flexbox>
        <Flexbox horizontal='center'>
          <a href='tel:+6281324035623'>
            <EffectButton width={200} height={55} background={purple}>
              <FaPhone style={{ fontSize: '1.6rem', marginRight: '8px', display: 'inline-block' }} />
              <span>call us</span>
            </EffectButton>
          </a>
        </Flexbox>
        <Flexbox horizontal='center'>
          <a href='https://wa.me/6281324035623?text=Hi%20Forstek%2C%20I%20am%20interested%20in%20working%20together%20with%20you.%20I%20want%20to%20make%20...'>
            <EffectButton width={200} height={55} background={purple}>
              <FaWhatsapp style={{ fontSize: '1.6rem', marginRight: '8px', display: 'inline-block' }} />
              <span>message us</span>
            </EffectButton>
          </a>
        </Flexbox> */}
        <Flexbox horizontal='center'>
          <a href='mailto: forstek.co@gmail.com?subject=Inquiry&body=Hi%20Forstek%2C%20%0A%0AI%20am%20interested%20in%20working%20together%20with%20you.%20I%20want%20to%20make%20...'>
            <EffectButton width={200} height={55} background={purple}>
              <FaRegEnvelope style={{ fontSize: '1.6rem', marginRight: '8px', display: 'inline-block' }} />
              <span>email us</span>
            </EffectButton>
          </a>
        </Flexbox>
      </ResponsiveFlex>
    </Section>
    <Section>
      <Footer />
    </Section>
  </Layout>
)

export default Index
