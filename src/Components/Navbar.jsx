import { Link, NavLink } from "react-router-dom"
import logo from "../assets/Logo.svg"

export default function Navbar() {
  return (
    <nav className="">
      <div className="bg-white rounded-3xl flex justify-between items-center px-8 py-2 mt-4 text-black">

        <ul className="flex items-center gap-8">
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/About"}>About</NavLink></li>
          <li><NavLink to={"/Services"}>Services</NavLink></li>
        </ul>

        <Link to={"/"}>
          <img src={logo} className="w-40" />
        </Link>

        <ul className="flex items-center gap-8">
          <li><NavLink to={"/Resume"}>Resume</NavLink></li>
          <li><NavLink to={"/Projects"}>Projects</NavLink></li>
          <li><NavLink to={"/Contact"}>Contact us</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
