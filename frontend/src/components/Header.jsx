import {Link} from "react-router-dom";

import logo from "../assets/logo.svg"
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/30 z-10">
        <div className="px-4 flexBetween py-3 max-xs:px-2">
            {/**logo */}
            <div className="">
                <Link><img src={logo} alt="logo"/></Link>
            </div>
            {/**Navbar */}
            <Navbar/>
            {/**buttons */}
            <div>buttons</div>
        </div>
    </header>
  )
}

export default Header