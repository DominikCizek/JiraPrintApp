import  {useState, useEffect} from "react";
import axios from 'axios'

 function useFetch(passedUrl){

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const config = {
      method: 'get',
      url: passedUrl,
      headers: { 
        'Authorization': 'Basic c2Fyc29uakBnbWFpbC5jb206eEhVMG5ublRZbk5VZVVsaUMyejcyMUYz', 
      },
    };

    useEffect(()=>{
        setLoading(true)
        axios(config)
    .then(res => {
        setData(res)
    })
    .catch((error)=> {
    setError(error)
    })
    .finally(setLoading(false));

    },[passedUrl])

    return {data, loading, error}

}
export default useFetch;