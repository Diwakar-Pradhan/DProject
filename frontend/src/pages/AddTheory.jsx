import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import Header from '../components/Header'
import toast from 'react-hot-toast'

const AddTheory = () => {

    const { axios } = useAppContext()
    const [isAdding, setIsAdding] = useState(false)
    const [subject, setSubject] = useState('')
    const [question, setQuestion] = useState('')
    const [explanation, setExplanation] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            setIsAdding(true)

            const response = await axios.post('/theory/add', {
                subject,
                question,
                explanation
            })

            if (response?.data?.success) {
                toast.success(response.data.message || 'Theory added successfully')
                setSubject('')
                setQuestion('')
                setExplanation('')
            } else {
                toast.error(response?.data?.message || 'Failed to add theory')
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message || 'An error occurred')
        } finally {
            setIsAdding(false)
        }
    }

  return (
    <div>
        <Header/>
        <div className='flex justify-center min-h-full px-4'>
            <form onSubmit={onSubmitHandler} className='w-full max-w-2xl'>
                <div className='bg-white p-4 md:p-10 shadow-lg rounded-lg'>
                    <h3 className='text-center mb-6 text-xl font-semibold'>ADD A NEW QUESTION</h3>

                    <div className='space-y-4'>
                        <div>
                            <p className='mb-2 font-medium'>Subject</p>
                            <select required className='w-full p-2 border border-gray-300 outline-none rounded focus:ring-2 focus:ring-blue-500' onChange={(e) => setSubject(e.target.value)} value={subject}>
                                <option value="">Select Subject</option>
                                <option value="OOPS">OOPS</option>
                                <option value="DBMS">DBMS</option>
                                <option value="OS">OS</option>
                                <option value="CN">CN</option>
                                <option value="DSA">DSA</option>
                            </select>
                        </div>

                        <div>
                            <p className='mb-2 font-medium'>Question</p>
                            <input type="text" placeholder='Type here' required className='w-full p-2 border border-gray-300 outline-none rounded focus:ring-2 focus:ring-blue-500' onChange={(e) => setQuestion(e.target.value)} value={question}/>
                        </div>

                        <div>
                            <p className='mb-2 font-medium'>Explanation</p>
                            <textarea placeholder='Type here' required rows="4" className='w-full p-2 border border-gray-300 outline-none rounded resize-none focus:ring-2 focus:ring-blue-500' onChange={(e) => setExplanation(e.target.value)} value={explanation}/>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-4'>
                        <button disabled={isAdding} type='submit'
                        className='w-40 h-12 bg-red-600 hover:bg-red-700 text-white rounded cursor-pointer text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors'> {isAdding ? 'Adding...' : 'Add'} </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTheory
