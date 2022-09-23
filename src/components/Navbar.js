import Login from './Login'
import { useContext } from 'react'
import { UserInfoContext } from '../App'
import Signup from './Signup'
import Logout from './Logout'

export default function Navbar() {
  const { user } = useContext(UserInfoContext)
  return (
    <>
      <h3>This is Navbar {user?.email}</h3>
      {!user?.email && <Signup />}
      {!user?.email && <Login />}
      <br />
      {user?.email && <Logout />}
    </>
  )
}
