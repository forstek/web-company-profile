import Head from 'next/head'
import Sidebar from '../User/Sidebar'
import '../../../styles/Content.css'
import '../../../styles/Sidebar.css'

const UserLayout = ({ children, pageHeader }) => (
    <div className="root">
        <Head>
            <title>Forstek co.</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        </Head>
        <Sidebar />
        <section className="content">
            <h4 className="page-header">{ pageHeader }</h4>
            { children }
        </section>
    </div>
)

export default UserLayout