import Link from 'next/link'
import { withRouter } from 'next/router'

const Sidemenu = (props) => {

    const { pathname } = props.router
    const pathInArray = pathname.split("/")
    const activeRoute = pathInArray[pathInArray.length-1]

    return (
        <ul className="navbar-nav flex-column">
            <li className="nav-item">
                <Link href="/admin/dashboard">
                    <a className={`nav-link ${activeRoute === "dashboard" ? "active" : ""} font-weight-bold`}>
                        Home
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/admin/users">
                    <a className={`nav-link ${activeRoute === "users" ? "active" : ""} font-weight-bold`}>
                        User
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/admin/customers">
                    <a className={`nav-link ${activeRoute === "customers" ? "active" : ""} font-weight-bold`}>
                        Customer
                    </a>
                </Link>
            </li>
        </ul>
    )

}

export default withRouter(Sidemenu)