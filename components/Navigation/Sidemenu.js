import Link from 'next/link'
import { withRouter } from 'next/router'
import * as Route from '../../constants/Route'

const Sidemenu = (props) => {

    const { pathname } = props.router
    const pathInArray = pathname.split("/")

    return (
        <ul className="navbar-nav flex-column">
            <li className="nav-item">
                <Link href={Route.ADMIN_DASHBOARD}>
                    <a className={`nav-link ${pathInArray.includes("dashboard") ? "active" : ""} font-weight-bold`}>
                        Home
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href={Route.ADMIN_CUSTOMERS}>
                    <a className={`nav-link ${pathInArray.includes("customers") ? "active" : ""} font-weight-bold`}>
                        Customer
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href={Route.ADMIN_EMAIL}>
                    <a className={`nav-link ${pathInArray.includes("email") ? "active" : ""} font-weight-bold`}>
                        Email
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href={Route.ADMIN_USERS}>
                    <a className={`nav-link ${pathInArray.includes("users") ? "active" : ""} font-weight-bold`}>
                        User
                    </a>
                </Link>
            </li>
        </ul>
    )

}

export default withRouter(Sidemenu)