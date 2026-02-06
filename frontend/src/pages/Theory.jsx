import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { MdAddBox } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Header from '../components/Header'
import toast from 'react-hot-toast'

const Theory = () => {
    const { theories, setTheories, navigate, axios } = useAppContext()
    const [isDeleting, setIsDeleting] = useState(null)

    const handleDelete = async (id) => {
        try {
            setIsDeleting(id)
            const response = await axios.delete(`/theory/${id}`)
            
            if (response?.data?.success) {
                toast.success(response.data.message || 'Theory deleted successfully')
                setTheories(theories.filter(theory => theory._id !== id))
            } else {
                toast.error(response?.data?.message || 'Failed to delete theory')
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message || 'An error occurred')
        } finally {
            setIsDeleting(null)
        }
    }
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
    
                <h2 className="text-2xl font-bold text-[#452829] mb-6 text-center">Theory List</h2>
                
                <button
                    onClick={() => navigate('/theory/add')}
                    className="text-2xl p-2 cursor-pointer"
                >
                <MdAddBox size={40}/>
                </button>
            </div>

          {/* Theory Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#452829] text-[#eae0cf]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-1/5">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-1/5">Question</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-3/5">Explanation</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {theories.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                        No theory added yet.
                      </td>
                    </tr>
                  ) : (
                    theories.map((theory) => (
                      <tr key={theory._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {theory.subject}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 wrap-break-word whitespace-pre-wrap">
                          {theory.question}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 wrap-break-word whitespace-pre-wrap">
                          {theory.explanation}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            onClick={() => handleDelete(theory._id)}
                            disabled={isDeleting === theory._id}
                            className="text-red-600 hover:text-red-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            title="Delete theory"
                          >
                            <MdDelete size={20} />
                          </button>
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

export default Theory
