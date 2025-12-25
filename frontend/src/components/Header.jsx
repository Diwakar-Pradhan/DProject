import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className='flex justify-between items-center px-4 mb-4 h-22 bg-[#452829]'>
                <button
                    className="text-2xl p-2 cursor-pointer opacity-0"
                >
                <BsThreeDotsVertical color='white'/>
                </button> {/* for adjusting */}

                <h1 onClick={() => navigate('/')} className='text-3xl font-bold text-center text-[#eae0cf] cursor-pointer'>Daily Dose</h1>
                
                <div className='relative'>
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-2xl p-2 cursor-pointer"
                    >
                    <BsThreeDotsVertical color='white'/>
                    </button>
                    {showMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-[#eae0cf] rounded-md shadow-lg z-10">
                            <div className="py-1">

                                <button
                                    onClick={() => { setShowMenu(false); navigate('/vocabulary')}}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#dbceb8] w-full text-left cursor-pointer"
                                >
                                Vocabulary
                                </button>

                                <button
                                    onClick={() => { setShowMenu(false); navigate('/tip')}}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#dbceb8] w-full text-left cursor-pointer"
                                >
                                Tips
                                </button>

                                <button
                                    onClick={() => { setShowMenu(false); navigate('/theory')}}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#dbceb8] w-full text-left cursor-pointer"
                                >
                                Theory
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
