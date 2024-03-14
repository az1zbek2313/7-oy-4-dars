import { NavLink } from "react-router-dom"

function Cart() {
  return (
    <div className={`container-lg`}>
    <NavLink style={{textDecoration: 'none'}} to={'/'}>from Cart to Home</NavLink>
    </div>
  )
}

export default Cart;