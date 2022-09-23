import { useContext } from "react"

import { UserInfoContext } from "../App"

export default function Logout() {
  const {setUser}=useContext(UserInfoContext)
  return (
    <>
      <h3>Log out</h3>
      <button onClick={()=>setUser({})}>Log out</button>
    </>
  )
}
