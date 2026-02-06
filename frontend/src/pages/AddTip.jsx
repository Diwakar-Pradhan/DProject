import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import Header from '../components/Header'

const AddTip = () => {

    const { axios } = useAppContext()
    const [isAdding, setIsAdding] = useState(false)
    const [field, setField] = useState('')
    const [note, setNote] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            setIsAdding(true)

            const response = await axios.post('/tip/add', {
                field,
                note
            })

            if(response?.data?.success) {
                toast.success(response.data.message || 'Tip added successfully')
                setField('')
                setNote('')
            } else {
                toast.error(response?.data?.message || 'Failed to add tip')
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
                <div className='bg-white p-4 md:p-10 rounded-lg'>
                    <h3 className='text-center mb-2 text-xl font-semibold'>Add A Tip</h3>
                </div>

                <div className='space-y-4'>
                    <div>
                        <p className='mb-2 font-medium'>Field</p>
                        <select required className='w-full p-2 border border-gray-300 outline-none rounded focus:ring-2 focus:ring-blue-500' onChange={(e) => setField(e.target.value)} value={field}>
                            <option value="">Select Field</option>
                            <option value="Development">Development</option>
                            <option value="Coding">Coding</option>
                        </select>
                    </div>

                    <div>
                        <p className='mb-2 font-medium'>Note</p>
                        <textarea placeholder='Type here' required rows="4" className='w-full p-2 border border-gray-300 outline-none rounded resize-none focus:ring-2 focus:ring-blue-500' onChange={(e) => setNote(e.target.value)} value={note}/>
                    </div>
                </div>

                <div className='flex items-center justify-center mt-4'>
                    <button disabled={isAdding} type='submit'
                    className='w-40 h-12 bg-red-600 hover:bg-red-700 text-white rounded cursor-pointer text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors'> {isAdding ? 'Adding...' : 'Add'} </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTip
