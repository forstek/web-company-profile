import Head from 'next/head'
import Navbar from 'components/Layout/Navbar'
import './layout.module.css'
import './color.module.css'

const GuestLayout = (props) => (
  <div>
    <Head>
      <title>{props.title} | Forstek</title>
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' />
      <link rel='shortcut icon' type='image/x-icon' href='/static/images/favicon_orange.png' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap' rel='stylesheet' />
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
