"use client";

import Link from "next/link";
import AuthModal from "../components/AuthModal";
import AuthModalInputs from "../components/AuthModalInputs";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/AuthContext2";
import useAuth from "@/hooks/useAuth";

// import "./Navbar.css";
// import { RiArrowDownSLine } from "react-icons/ri";

const Navbar2 = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();
  return (
    <header>
      <Link href="#" className="logo">
        LOGO
      </Link>
      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar">Menu</label>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Start here</Link>
            <ul>
              <li className="">
                <Link href="/start-here-1">Start here 1 </Link>
              </li>
              <li className="">
                <Link href="/start-here-2">Start here 2 </Link>
              </li>
              <li className="">
                <Link href="/start-here-3">Start here 3 </Link>
              </li>
              <li className="">
                <Link href="/start-here-4">Start here 4</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">Articles</Link>
            <ul>
              <li className="">
                <Link href="/articles-1">Articles 1</Link>
              </li>
              <li className="">
                <Link href="/articles-2">Articles 2</Link>
              </li>
              <li className="">
                <Link href="/articles-3">Articles 3</Link>
              </li>
              <li className="">
                <Link href="/articles-4">Articles 4</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <>
            {loading ? null : (
              <div className="sign-up-in-wrapper">
                {data ? (
                  <button className="signup-modal-button" onClick={signout}>
                    Sign out
                  </button>
                ) : (
                  <>
                    <AuthModal isSignin={true} />
                    <AuthModal isSignin={false} />
                  </>
                )}
              </div>
            )}
          </>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar2;
