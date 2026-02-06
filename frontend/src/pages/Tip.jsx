import React, { useState } from 'react'
import { MdAddBox } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useAppContext } from '../context/AppContext'
import Header from '../components/Header'
import toast from 'react-hot-toast'

const Tip = () => {
    const { tips, setTips, navigate, axios } = useAppContext()
    const [isDeleting, setIsDeleting] = useState(null)

    const handleDelete = async (id) => {
        try {
            setIsDeleting(id)
            const response = await axios.delete(`/tip/${id}`)
            
            if (response?.data?.success) {
                toast.success(response.data.message || 'Tip deleted successfully')
                setTips(tips.filter(tip => tip._id !== id))
            } else {
                toast.error(response?.data?.message || 'Failed to delete tip')
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
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tips.length === 0 ? (
                    <tr>
                      <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            onClick={() => handleDelete(tip._id)}
                            disabled={isDeleting === tip._id}
                            className="text-red-600 hover:text-red-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            title="Delete tip"
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

export default Tip
