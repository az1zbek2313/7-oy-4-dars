import { NavLink } from "react-router-dom"

function About() {
  return (
    <div className={`container-lg`}>
    <NavLink style={{textDecoration: 'none'}} to={'/'}>from About to Home</NavLink>
  </div>
  )
}

export default About