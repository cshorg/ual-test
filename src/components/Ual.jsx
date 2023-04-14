import { RpcError } from "eosjs"
import { useContext } from "react"
import { UALContext } from "ual-reactjs-renderer"

const Ual = () => {
  const ual = useContext(UALContext)

  const login = () => {
    ual.logout()
    ual.showModal()
  }

  const logout = () => {
    ual.logout()
  }

  return (
    <>
      {ual.activeUser && ual.activeUser.accountName}
      {ual.activeUser ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => login()}>Login</button>
      )}
    </>
  )
}

export default Ual
