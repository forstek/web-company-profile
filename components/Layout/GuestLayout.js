import Head from 'next/head'
import Navbar from 'components/Layout/Navbar'
import 'styles/Index.css'
import 'styles/Color.css'

const GuestLayout = (props) => (
  <div>
    <Head>
      <title>{props.title} | Forstek</title>
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' />
      <link rel='shortcut icon' type='image/x-icon' href='/static/images/favicon.png' />
    </Head>
    <div className='container'>
      <Navbar />
      <main className='content'>
        {props.children}
      </main>
    </div>
  </div>
)

export default GuestLayout
