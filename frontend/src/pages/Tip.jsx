import React from 'react'
import { MdAddBox } from "react-icons/md";
import { useAppContext } from '../context/AppContext'
import Header from '../components/Header'

const Tip = () => {
    const { tips, navigate } = useAppContext()

  return (
    <div className="min-h-screen bg-[#e8d1c5]">
      <Header />
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <button
                className="text-2xl p-2 cursor-pointer opacity-0"
            >
            <MdAddBox />
            </button>

            <h2 className="text-2xl font-bold text-[#452829] mb-6 text-center">Tips List</h2>
            
            <button
                onClick={() => navigate('/tip/add')}
                className="text-2xl p-2 cursor-pointer"
            >
            <MdAddBox size={40}/>
            </button>
          </div>

          {/* Tips Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#452829] text-[#eae0cf]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-1/4">Field</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-3/4">Note</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tips.length === 0 ? (
                    <tr>
                      <td colSpan="2" className="px-6 py-4 text-center text-gray-500">
                        No tips added yet.
                      </td>
                    </tr>
                  ) : (
                    tips.map((tip) => (
                      <tr key={tip._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {tip.field}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 wrap-break-word whitespace-pre-wrap">
                          {tip.note}
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

export default Tip
