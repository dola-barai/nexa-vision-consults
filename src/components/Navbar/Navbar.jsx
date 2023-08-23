import { Link } from "react-router-dom";
import logo from '../../../public/logo1.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
          
        }).catch(error => {
           console.error(error)
        });
    }

    const navOptions = <>
        <li><Link to="" className="text-black font-semibold hover:text-purple-600">Home</Link></li>
        <li><Link to="" className="text-black font-semibold hover:text-purple-600">Services</Link></li>
        <li><Link to="" className="text-black font-semibold hover:text-purple-600">About Us</Link></li>
        <li><Link to="" className="text-black font-semibold hover:text-purple-600">Contact</Link></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="h-12" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <><h1 className="mr-3 h-8 font-semibold font-serif text-green-700" >Welcome, {user.displayName}</h1>
                            <button className="btn btn-primary btn-sm" onClick={handleSignOut}>Sign out</button>
                        </> : <Link to='/login'><button className="btn btn-sm btn-primary">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;