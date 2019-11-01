import Layout from 'components/Layout/GuestLayout'
import Headline from 'components/Typography/Headline'
import Paragraph from 'components/Typography/Paragraph'
import EffectButton from 'components/Button/EffectButton'
import BasicButton from 'components/Button/Button'

const Index = () => (

  <Layout>
    <Paragraph> We know you have idea, and
      <br /> We know that build your idea takes
      <br /> a lot of time and energy, so
      <br /> We here to help you!
    </Paragraph>
    <BasicButton primary round text="Let's get started" style={{ display: 'block', margin: 'auto' }} />
    <Headline>We are Forstek</Headline>
    <Paragraph>We provide reliable and affordable development team to help you, right now.</Paragraph>
    <Headline>How It Works</Headline>
    <Paragraph>We provide reliable and affordable development team to help you, right now.</Paragraph>
    <Headline>Our Works</Headline>
    <Paragraph>Please open these websites from desktop browser for best experience.</Paragraph>
    <EffectButton width='185' height='45' text="Let's get started" />
  </Layout>

)

export default Index
