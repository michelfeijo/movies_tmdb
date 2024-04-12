import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import { IoLogIn } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return(
        <nav id="navbar">
            <h2>
                <Link to="/" className="vivo-link">
                <img className="logo" src="/Logo_Vivo.svg" width={44.66} height={36.8}/>
                Vivo Movies
            </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pesquise o filme"  onChange={(e) => setSearch(e.target.value)} value={search}/>
                <button type="submit">
                    <BiSearchAlt2/>
                </button>
            </form>
            <div className="login-button">
                <IoLogIn 
                    size={24}
                    onClick={() => navigate('/login')}
                    title="Login"
                    className="login-icon"
                />
                <span>Login</span>
            </div>
        </nav>
    )
}

export default Navbar;
