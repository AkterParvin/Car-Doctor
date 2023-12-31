import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Nav = () => {
    const { logOut, user } = useContext(AuthContext);
    // logout user function 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged Out');
            })
            .catch(error => console.log(error.message))
    }
    const navLinks = <>
        <li><Link to="/">Home </Link></li>
        <li><Link to="">About</Link></li>
        <li><Link to="">Services</Link></li>
        <li><Link to="">Blog</Link></li>
        <li><Link to="">Contact</Link></li>
        {/* <li><Link to="/login">Login</Link></li> */}

    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-6 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" className="w-14 lg:w-[80%]" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="btn btn-outline btn-error btn-sm ">Appointment</button>
                {
                    user ? <button onClick={handleLogOut} className="btn btn-outline btn-neutral btn-sm ">Log Out</button> :
                        <Link to='/login'><button className="btn btn-outline btn-warning btn-sm ">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Nav;