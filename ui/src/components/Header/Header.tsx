import React from "react";
import { Link } from "react-location";

const Header = () => {
    return (
        <header className="header filter drop-shadow-sm bg-white flex">
            <div className="flex justify-between w-full px-6">
                <div className="flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z" clip-rule="evenodd" />
                    </svg>
                    <span className="uppercase font-sans font-bold text-lg pl-2">Price Scraper</span>
                </div>
                <ul className="flex items-center justify-items-center flex-end">
                    <li className="bg-green-500 text-white font-bold p-2 rounded">
                        <Link to='/add'>Add</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;