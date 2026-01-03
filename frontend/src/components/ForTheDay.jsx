import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { useEffect } from 'react';

const ForTheDay = () => {

    const { axios } = useAppContext();

    const [currentVocab, setCurrentVocab] = useState(null);
    const [currentTip, setCurrentTip] = useState(null);
    const [currentTheory, setCurrentTheory] = useState(null);

    const fetchData = async () => {
        try {
            const vocabRes = await axios.get('/vocabulary/daily');
            if (vocabRes.data.success) {
                setCurrentVocab(vocabRes.data.vocabulary);
            }

            const tipRes = await axios.get('/tip/daily');
            if (tipRes.data.success) {
                setCurrentTip(tipRes.data.tip);
            }

            const theoryRes = await axios.get('/theory/daily');
            if (theoryRes.data.success) {
                setCurrentTheory(theoryRes.data.theory);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className="space-y-6 p-4">
        {/* Word of the Day */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
            <h2 className="text-xl font-semibold text-center mb-4">Word of the Day</h2>
            {currentVocab ? (
                <div className="text-center">
                    <h3 className="text-lg font-medium">{currentVocab.word}</h3>
                    <p className="text-gray-600 wrap-break-word whitespace-pre-wrap">{currentVocab.meaning}</p>
                    <p className="text-sm text-gray-500 mt-2">Similar: {currentVocab.similar}</p>
                    <p className="text-sm text-gray-500 wrap-break-word whitespace-pre-wrap">Examples: {currentVocab.examples}</p>
                </div>
            ) : (
                <p className="text-center">Loading...</p>
            )}
        </div>

        {/* Tip of the Day */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
            <h2 className="text-xl font-semibold text-center mb-4">Tip of the Day</h2>
            {currentTip ? (
                <div className="text-center">
                    <p className="text-gray-600 wrap-break-word whitespace-pre-wrap">{currentTip.note}</p>
                    <p className="text-sm text-gray-500 mt-2">Field: {currentTip.field}</p>
                </div>
            ) : (
                <p className="text-center">Loading...</p>
            )}
        </div>
        
        {/* Theory of the Day */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
            <h2 className="text-xl font-semibold text-center mb-4">Theory of the Day</h2>
            {currentTheory ? (
                <div className="text-center">
                    <h3 className="text-lg font-medium wrap-break-word whitespace-pre-wrap">{currentTheory.question}</h3>
                    <p className="text-gray-600 wrap-break-word whitespace-pre-wrap">{currentTheory.explanation}</p>
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
