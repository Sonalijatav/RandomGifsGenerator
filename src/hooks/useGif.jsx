// create custom hook useGif


import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';


let API_KEY = "OoM9aKXLGO8hVACLDAAxs3AzUu96ur6l"
 const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;



const useGif =(tag) =>{
    const [gif,setGif] = useState('');
    const [loading, setLoading] = useState('false');

    async function fetchData(tag){
        setLoading(true)
        
         const output = await axios.get(tag ? `${url}&tag=${tag}` : url);

         console.log(output);
         console.log(output.data.data.images.downsized_large.url);
         setGif(output.data.data.images.downsized_large.url);
    
         setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    },[]);

    return {gif, loading,fetchData};
}

export default useGif