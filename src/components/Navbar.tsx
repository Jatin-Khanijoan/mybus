import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Buses", href: "/buses" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
   
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
   
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => {
        return location.pathname === path;
    };
   
    return(
        <header 
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled 
                    ? "bg-white shadow-lg" 
                    : "bg-[#ffeeee]"
            }`}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16">
                    <Link 
                        to="/" 
                        className="flex-shrink-0 group"
                    >
                        <div className="text-3xl md:text-4xl font-bold transition-all duration-300 hover:scale-105">
                            <span></span>
                            <span className="text-[#ff3333]">My</span><span className="text-gray-700">Bus</span>
                        </div>
                    </Link>
                    
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.href} 
                                        className={`relative text-lg font-medium transition-all duration-300 px-2 py-1 rounded-md
                                            ${isActive(link.href)
                                                ? "text-[#ff3333] font-semibold"
                                                : "text-gray-700 hover:text-[#ff6666]"
                                            }
                                            before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                                            before:bg-[#ff3333] before:transform before:scale-x-0 before:origin-right before:transition-transform
                                            before:duration-300 hover:before:scale-x-100 hover:before:origin-left
                                            ${isActive(link.href) ? "before:scale-x-100" : ""}
                                        `}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="md:hidden">
                        <button 
                            className="text-2xl text-[#ff3333] transition-colors hover:text-[#ff6666]" 
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
     
            {/* Mobile Menu */}
            <div 
                className={`md:hidden fixed inset-x-0 top-16 bg-white shadow-lg 
                           transform transition-all duration-300 ease-in-out ${
                               isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                           }`}
            >
                <nav className="px-4 pt-2 pb-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href} 
                            className={`block px-4 py-2 rounded-lg text-base font-medium transition-all duration-300
                                ${isActive(link.href)
                                    ? "bg-red-50 text-[#ff3333] font-semibold"
                                    : "text-gray-700 hover:bg-red-50/50 hover:text-[#ff6666]"
                                }`}
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;