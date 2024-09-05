import { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import logo from '../assets/images/logo-dark.png'


const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navItems = [
        { link: "Home", path: "home" },
        { link: "Patient Information", path: "patient information",
            submenu: [
                {link: "General info", path: "general-info"},
                {link: "Appointments", path: "appointments"},
                {link: "Billing", path: "billing"},

            ]
         },
        { link: "Health Care and Professionals", path: "health care and professionals",
            submenu: [
                { link: "Downloads", path: "forms" },
                { link: "Guides", path: "guides" },
                { link: "Brochures", path: "brochures" },
            ]
         },
        { link: "Downloads", path: "how it works" },
        { link: "Join Us", path: "contact",
            submenu: [
                {link:"Careers", path: "careers"},
                {link:"Volunteers", path: "volunteers"},
                {link:"Internships", path: "internships"},

            ]
         },
    ];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className='bg-white shadow-lg'>
            {/* Logo */}
            <div className='flex items-center mt-4'>
                        <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                            <img src={logo} alt="Logo" className='inline-block items-center' />
                        </a>
                    </div>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center py-4'>
                    
                    

                    {/* Navigation Links */}
                    <div className='hidden md:flex items-center space-x-12 font-semibold'>
                        <ul className='flex space-x-12'>
                            {navItems.map(({ link, path }) => (
                                <li key={link} className="relative group">
                                    <a href={path} className="block hover:text-gray-300">{link}</a>
                                    {/* Dropdown */}
                                    {link === "About Us" && (
                                        <ul className={`absolute left-0 mt-2 bg-white shadow-lg py-2 ${dropdownOpen ? 'block' : 'hidden'} group-hover:block`}>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</a></li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a></li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 3</a></li>
                                        </ul>
                                    )}
                                    {link === "Patient Information" && (
                                        <ul className={`absolute left-0 mt-2 bg-white shadow-lg py-2 ${dropdownOpen ? 'block' : 'hidden'} group-hover:block`}>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</a></li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a></li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 3</a></li>
                                        </ul>
                                    )}
                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* Language and Sign-Up */}
                    <div className='flex items-center space-x-12'>
                        <a href='#' className='hidden lg:flex items-center hover:text-secondary'>
                            <GrLanguage className='mr-2' />
                            <span>Languages</span>
                        </a>
                        <button className='bg-slate-600 text-white py-2 px-4 transition-all duration-300 rounded hover:text-white 
                        hover:bg-indigo-600'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            
        </nav>
    );
};

export default NavBar;
