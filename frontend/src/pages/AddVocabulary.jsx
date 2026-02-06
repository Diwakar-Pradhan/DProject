import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import Header from '../components/Header'

const AddVocabulary = () => {

    const { axios } = useAppContext()
    const [isAdding, setIsAdding] = useState(false)
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    const [similar, setSimilar] = useState('');
    const [examples, setExamples] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            setIsAdding(true)

            const response = await axios.post('/vocabulary/add', {
                word,
                meaning,
                similar,
                examples
            })

            if (response?.data?.success) {
                toast.success(response.data.message || 'Vocabulary added successfully')
                setWord('')
                setMeaning('')
                setSimilar('')
                setExamples('')
            } else {
                toast.error(response?.data?.message || 'Failed to add vocabulary')
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
                    <h3 className='text-center mb-3 text-xl font-semibold'>ADD A NEW WORD</h3>

                    <div className='space-y-1'>
                        <div>
                            <p className='mb-2 font-medium'>Word</p>
                            <input type="text" placeholder='Type here' required className='w-full p-2 border border-gray-300 outline-none rounded focus:ring-2 focus:ring-blue-500' onChange={(e) => setWord(e.target.value)} value={word}/>
                        </div>

                        <div>
                            <p className='mb-2 font-medium'>Meaning</p>
                            <textarea placeholder='Type here' required rows="3" className='w-full p-2 border border-gray-300 outline-none rounded resize-none focus:ring-2 focus:ring-blue-500' onChange={(e) => setMeaning(e.target.value)} value={meaning}/>
                        </div>

                        <div>
                            <p className='mb-2 font-medium'>Similar Word</p>
                            <input type="text" placeholder='Type here' required className='w-full p-2 border border-gray-300 outline-none rounded focus:ring-2 focus:ring-blue-500' onChange={(e) => setSimilar(e.target.value)} value={similar}/>
                        </div>

                        <div>
                            <p className='mb-2 font-medium'>Example</p>
                            <textarea placeholder='Type here' required rows="3" className='w-full p-2 border border-gray-300 outline-none rounded resize-none focus:ring-2 focus:ring-blue-500' onChange={(e) => setExamples(e.target.value)} value={examples}/>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-2'>
                        <button disabled={isAdding} type='submit'
                        className='w-40 h-12 bg-red-600 hover:bg-red-700 text-white rounded cursor-pointer text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors'> {isAdding ? 'Adding...' : 'Add'} </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddVocabulary
