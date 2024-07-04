import { useState } from 'react'
import axios from 'axios';
import './Random.css'
import Spinner from './Spinner.jsx'

import { useEffect } from 'react';
import useGif from '../hooks/useGif.jsx';


const Random = () =>{
    //const [gif,setGif] = useState('');
    // const [loading, setLoading] = useState('false ');

    // async function fetchData(){
    //     setLoading(true)
    //     let API_KEY = "OoM9aKXLGO8hVACLDAAxs3AzUu96ur6l"
    //      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    //      const output = await axios.get(url);
    //      console.log(output);
    //      console.log(output.data.data.images.downsized_large.url);
    //      setGif(output.data.data.images.downsized_large.url);
    
    //      setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // },[]);

    // function clickHandler(){
    //     //random img fetch daat lake de rha h toh onclick pr usko call
    //     fetchData();
    // }

    const{gif,loading, fetchData} = useGif();
    return (
        <div className="random-div-1">
           <h1 className='random-h1'>RANDOM GIF</h1>

           {
            loading ? (<Spinner/>) : (<img src={gif} width = '350'/>)
           }
           
           <button onClick={() => fetchData()} className='random-btn'>
                Generate
            </button>
        </div>
    )
}

export default Random