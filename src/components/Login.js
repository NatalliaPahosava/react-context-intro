import { useContext } from 'react'
import { UserInfoContext } from '../App'

export default function Login() {
  const { setUser } = useContext(UserInfoContext)
  const userInfo = { email: 'Jons@gmail.com', password: '12345' }
  return (
    <>
      <button onClick={() => setUser(userInfo)}>Log in</button>
    </>
  )
}
