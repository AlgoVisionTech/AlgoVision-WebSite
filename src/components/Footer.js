import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from './Navbar/logo-transparent-png.png'
=======
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from './Navbar/logo-transparent-png.png';
>>>>>>> 2c5d9434b9a97ee75ef3efe9414cf7c858fe2aca

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
<<<<<<< HEAD

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <div className='text-md font-medium text-gray-600'>
                                <img src={logo} ></img>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Web Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Mobile App Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Domain and Hosting</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">General IT Consultations</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div className="text-xl mb-6">
                            Social Media Links.
                        </div>

                                <div className="text-md font-medium mb-6">
                                    Follow us on social media.
                                </div>
                        <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                        </svg>
                                        </Link>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                        </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        AlgoVision Technologies
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
=======
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                                <div className='text-md font-medium text-gray-600'>
                                    <img src={logo} alt="Logo" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-2"><HashLink to="#" className="text-[#013289] hover:text-gray-900 transition">About</HashLink></li>
                                <li className="mb-2"><HashLink to="#" className="text-[#013289] hover:text-gray-900 transition">Services</HashLink></li>
                                <li className="mb-2"><HashLink to="#" className="text-[#013289] hover:text-gray-900 transition">Contact</HashLink></li>
                            </ul>
                        </div>
                        <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                            <ul className="text-md">
                                <li className="mb-2"><Link to="#" className="text-[#013289] hover:text-gray-900 transition">Web Development</Link></li>
                                <li className="mb-2"><Link to="#" className="text-[#013289] hover:text-gray-900 transition">Mobile App Development</Link></li>
                                <li className="mb-2"><Link to="#" className="text-[#013289] hover:text-gray-900 transition">Domain and Hosting</Link></li>
                                <li className="mb-2"><Link to="#" className="text-[#013289] hover:text-gray-900 transition">General IT Consultations</Link></li>
                            </ul>
                        </div>
                        <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold text-blue-900">
                            <h6 className="text-xl mb-4">Contact Us</h6>
                            <div className="text-md font-medium mb-4">Stay connected with us.</div>
                            <div className="text-[#013289] hover:text-gray-900 transition">Email: algovisiontechnologies6@gmail.com</div>
                            <div className="text-[#013289] hover:text-gray-900 transition">Contact: +91 8600314903 / 8975384048</div>
                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li className="ml-4">
                                        <a href="https://www.instagram.com/algovisiontechnologies?igsh=MWdscHVicHU1MHRmcw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white rounded-full shadow transition" aria-label="Instagram">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 7c4.9 0 9 4.1 9 9s-4.1 9-9 9-9-4.1-9-9 4.1-9 9-9m0-2c-6 0-11 5-11 11s5 11 11 11 11-5 11-11-5-11-11-11zm5.5 3c.8 0 1.5.7 1.5 1.5S22.3 11 21.5 11 20 10.3 20 9.5 20.7 8 21.5 8zM16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-200 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()} {"  "}
                                <HashLink to="#" className="hover:text-gray-900">AlgoVision Technologies</HashLink>. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

>>>>>>> 2c5d9434b9a97ee75ef3efe9414cf7c858fe2aca
export default Footer;
