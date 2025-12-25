import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { MdAddBox } from "react-icons/md";
import Header from '../components/Header'

const Vocabulary = () => {
  const { vocabularys, navigate } = useAppContext()

  return (
    <div className="min-h-screen bg-[#e8d1c5]">
      <Header />
      <div className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <button
                className="text-2xl p-2 cursor-pointer opacity-0"
            >
            <MdAddBox />
            </button>

            <h2 className="text-2xl font-bold text-[#452829] mb-6 text-center">Vocabulary List</h2>
            
            <button
                onClick={() => navigate('/vocabulary/add')}
                className="text-2xl p-2 cursor-pointer"
            >
            <MdAddBox size={40}/>
            </button>
          </div>

          {/* Vocabulary Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#452829] text-[#eae0cf]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Word</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Meaning</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Similar Words</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Examples</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {vocabularys.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                        No vocabulary added yet.
                      </td>
                    </tr>
                  ) : (
                    vocabularys.map((vocab) => (
                      <tr key={vocab._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {vocab.word}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 wrap-break-word whitespace-pre-wrap">
                          {vocab.meaning}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {vocab.similar}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 wrap-break-word whitespace-pre-wrap">
                          {vocab.examples}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vocabulary
