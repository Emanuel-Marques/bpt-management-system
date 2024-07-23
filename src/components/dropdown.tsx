import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownProps } from "../utils/types";


export function Dropdown({ title, items }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleClick = (path: string) => {
        navigate(path);
    }

    return (
        <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                id="dropdownHoverButton"
                className="text-white bg-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                type="button">
                {title}
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            {isOpen && (
                <div id="dropdownHover" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44  absolute">
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                       {
                            items.map((item, index) => (
                                 <li key={index}>
                                      <span onClick={() => handleClick(item.path)} className="block px-4 py-2 hover:bg-gray-100  ">{item.title}</span>
                                 </li>
                            ))
                       }
                    </ul>
                </div>
            )}
        </div>
    )
}