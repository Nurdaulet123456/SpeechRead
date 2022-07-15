import {useState, useCallback} from 'react';


const useHttp = () => {
    const [process, setProcess] = useState('waiting');

    try {
        const require = useCallback(async (url) => {
            
        }, [])
    } catch (error) {
        throw new Error(error);
    }

    return {
        process,
        setProcess
    }
}


export default useHttp;