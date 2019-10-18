import Sidemenu from '../../Navigation/Sidemenu'
import Logo from '../../Company/Logo'

const Sidebar = (props) => {

    return (
        <div className="sidebar">
            <div className="logo-wrapper">
                <Logo />
            </div>
            <Sidemenu/>
        </div>
    )
}

export default Sidebar