import React, { useState } from 'react'
import { FaShuffle } from "react-icons/fa6";
import { useAppContext } from '../context/AppContext';
import { useEffect } from 'react';

const ForTheDay = () => {

    const { navigate, vocabularys, tips, theories, setVocabularys, setTips, setTheories, axios } = useAppContext();

    const [currentVocab, setCurrentVocab] = useState(null);
    const [currentTip, setCurrentTip] = useState(null);
    const [currentTheory, setCurrentTheory] = useState(null);

    const fetchData = async () => {
        try {
            setCurrentVocab(vocabularys[Math.floor(Math.random() * vocabularys.length)]);
            setCurrentTip(tips[Math.floor(Math.random() * tips.length)])
            setCurrentTheory(theories[Math.floor(Math.random() * theories.length)])
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const randomizeVocab = () => {
        if (vocabularys.length > 0) {
            setCurrentVocab(vocabularys[Math.floor(Math.random() * vocabularys.length)]);
        }
    }

    const randomizeTip = () => {
        if (tips.length > 0) {
            setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
        }
    }

    const randomizeTheory = () => {
        if (theories.length > 0) {
            setCurrentTheory(theories[Math.floor(Math.random() * theories.length)]);
        }
    }

  return (
    <div className="space-y-6 p-4">
        {/* Word of the Day */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
            <h2 className="text-xl font-semibold text-center mb-4">Word of the Day</h2>
            <button onClick={randomizeVocab} className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 cursor-pointer">
                <FaShuffle size={20}/>
            </button>
            {currentVocab ? (
                <div className="text-center">
                    <h3 className="text-lg font-medium">{currentVocab.word}</h3>
                    <p className="text-gray-600">{currentVocab.meaning}</p>
                    <p className="text-sm text-gray-500 mt-2">Similar: {currentVocab.similar}</p>
                    <p className="text-sm text-gray-500">Examples: {currentVocab.examples}</p>
                </div>
            ) : (
                <p className="text-center">Loading...</p>
            )}
        </div>

        {/* Tip of the Day */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
            <h2 className="text-xl font-semibold text-center mb-4">Tip of the Day</h2>
            <button onClick={randomizeTip} className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 cursor-pointer">
                <FaShuffle size={20}/>
            </button>
            {currentTip ? (
                <div className="text-center">
                    <p className="text-gray-600">{currentTip.note}</p>
                    <p className="text-sm text-gray-500 mt-2">Field: {currentTip.field}</p>
                </div>
            ) : (
                <p className="text-center">Loading...</p>
            )}
        </div>
        
        {/* Theory of the Day */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
            <h2 className="text-xl font-semibold text-center mb-4">Theory of the Day</h2>
            <button onClick={randomizeTheory} className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 cursor-pointer">
                <FaShuffle size={20}/>
            </button>
            {currentTheory ? (
                <div className="text-center">
                    <h3 className="text-lg font-medium">{currentTheory.question}</h3>
                    <p className="text-gray-600">{currentTheory.explanation}</p>
                    <p className="text-sm text-gray-500 mt-2">Subject: {currentTheory.subject}</p>
                </div>
            ) : (
                <p className="text-center">Loading...</p>
            )}
        </div>
    </div>
  )
}

export default ForTheDay
