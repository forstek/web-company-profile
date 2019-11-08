// import { useEffect } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import Head from 'next/head'
import Sidebar from '../User/Sidebar'
import 'styles/Content.css'
import 'styles/Sidebar.css'

const UserLayout = ({ children, pageHeader, auth }) => {
  const handleRouteChange = url => {
    console.log('App is changing to: ', url)
  }

  Router.events.on('routeChangeStart', handleRouteChange)

  // useEffect(() => {
  //     const { isLoggedIn } = auth
  //     if ( !isLoggedIn ) Router.push("/admin/login")
  // })

  return (
    <div className='root'>
      <Head>
        <title>Forstek co.</title>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css' />

      </Head>
      <Sidebar />
      <section className='content container'>
        <h4 className='page-header'>{pageHeader}</h4>
        {children}
      </section>
    </div>
  )
}

// UserLayout.getInitialProps = ctx => {
//   initialize(ctx)
// }

const mapStateToProps = state => {
  return {
    auth: state.authentification,
    config: state.config
  }
}

export default connect(mapStateToProps)(UserLayout)
// export default withRouter(UserLayout)
