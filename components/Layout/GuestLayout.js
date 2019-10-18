import Head from 'next/head'
import Navbar from './Navbar'
import "../../styles/Index.css"
import "../../styles/Color.css"

const GuestLayout = (props) => (
    <div>
        <Head>
            <title>{props.title} | Forstek co.</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        </Head>
        <Navbar />
        <main className="content">
            {props.children}
        </main>
    </div>
)

export default GuestLayout