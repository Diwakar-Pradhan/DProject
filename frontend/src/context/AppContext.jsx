import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const navigate = useNavigate()

    const [vocabularys, setVocabularys] = useState([]);
    const [tips, setTips] = useState([]);
    const [theories, setTheories] = useState([]);

    const fetchVocabularyData = async () => {
        try {
            const vocabRes = await axios.get('/vocabulary');
            const vocabularyData = vocabRes.data;
            vocabularyData.success ? setVocabularys(vocabularyData.vocabularys) : toast.error(vocabularyData.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const fetchTipData = async () => {
        try {
            const tipRes = await axios.get('/tip');
            const tipData = tipRes.data;
            tipData.success ? setTips(tipData.tips) : toast.error(tipData.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const fetchTheoryData =async () => {
        try {
            const theoryRes = await axios.get('/theory');
            const theoryData = theoryRes.data;
            theoryData.success ? setTheories(theoryData.theories) : toast.error(theoryData.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchVocabularyData();
        fetchTipData();
        fetchTheoryData();
    }, [])

    const value = {
        axios,
        navigate,
        vocabularys,
        setVocabularys,
        tips,
        setTips,
        theories,
        setTheories
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}