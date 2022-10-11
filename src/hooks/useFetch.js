import { useEffect, useState } from 'react';

const useFetch=(url)=>{
   
    const [data,setData] = useState([]);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
       
            fetch('http://localhost:3001/articles/')
            .then((res) =>  res.json())
            .then((data) =>{
                
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err)=>{
                if(err.name==='AbortError'){
                    console.log('Fetch aborted');
                }
                else{
                    setError(err.message);
                    setIsPending(false);
                }
        })
        
    },[url]);

    return { data, isPending, error };

}

export default useFetch;