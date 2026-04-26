import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [showBg, setShowBg] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // 🔥 Fake auth (replace with real context later)
  const isAuthenticated = false

  // 🔥 Scroll effect (Netflix style)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBg(true)
      } else {
        setShowBg(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showBg ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/">
          <h1 className="text-red-600 text-3xl md:text-4xl font-bold">
            NETFLIX
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {!isAuthenticated ? (
            <>
              {location.pathname !== '/SignIn' && (
                <Link to="/SignIn">
                  <button className="text-white px-4 py-1 hover:underline">
                    Sign In
                  </button>
                </Link>
              )}

              {location.pathname !== '/SignUp' && (
                <Link to="/SignUp">
                  <button className="bg-red-600 px-4 py-1 rounded text-white hover:bg-red-700 transition">
                    Sign Up
                  </button>
                </Link>
              )}
            </>
          ) : (
            <>
              <span className="text-white">Welcome User</span>
              <button className="bg-red-600 px-4 py-1 rounded text-white">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          {!isAuthenticated ? (
            <>
              {location.pathname !== '/SignIn' && (
                <Link to="/SignIn">
                  <p className="text-white py-2">Sign In</p>
                </Link>
              )}

              {location.pathname !== '/SignUp' && (
                <Link to="/SignUp">
                  <p className="text-white py-2">Sign Up</p>
                </Link>
              )}
            </>
          ) : (
            <>
              <p className="text-white py-2">Profile</p>
              <p className="text-white py-2">Logout</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
