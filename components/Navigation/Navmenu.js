import Link from 'next/link'

const Navmenu = () => (
  <ul className='navbar-nav flex-row'>
    <li className='nav-item active mx-2'>
      <Link href='/'>
        <a className='nav-link c-primary font-weight-bold'>Home</a>
      </Link>
    </li>
    <li className='nav-item active mx-2'>
      <Link href='/about'>
        <a className='nav-link c-primary font-weight-bold'>About</a>
      </Link>
    </li>
    <li className='nav-item active mx-2'>
      <Link href='/about'>
        <a className='nav-link c-primary font-weight-bold'>Project</a>
      </Link>
    </li>
    <li className='nav-item active mx-2'>
      <Link href='/career'>
        <a className='nav-link c-primary font-weight-bold'>Blog</a>
      </Link>
    </li>
    <li className='nav-item active mx-2'>
      <Link href='/contact'>
        <a className='nav-link c-primary font-weight-bold'>Contact</a>
      </Link>
    </li>
  </ul>
)

export default Navmenu
