// import * as constants from './constants'
import logo from 'images/forstek-logo.svg'

// const setWidth = (size) => {
//   switch (size) {
//     case constants.SIZE_SMALL:
//       return '135px'
//     case constants.SIZE_LARGE:
//       return '225px'
//     default:
//       return '175px'
//   }
// }

// const setHeight = (size) => {
//   switch (size) {
//     case constants.SIZE_SMALL:
//       return '42px'
//     case constants.SIZE_LARGE:
//       return '70px'
//     default:
//       return '55px'
//   }
// }

const Logo = ({ size }) => {
  console.log('env: ', process.env.NODE_ENV)
  return <img src={logo} width='200px' />
}

export default Logo
