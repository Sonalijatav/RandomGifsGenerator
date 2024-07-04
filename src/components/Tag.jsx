import { useState } from 'react'
import axios from 'axios';
import './Tag.css'
import Spinner from './Spinner.jsx'

import { useEffect } from 'react';
import useGif from '../hooks/useGif.jsx';


const Tag = () =>{

    const[tag,setTag] = useState("car");
    const{gif,loading,fetchData}= useGif(tag);  //used your created hook

    return (
        <div className="rand-div-1">
           <h1 className='rand-h1'>RANDOM GIF {tag}</h1>

           {
            loading ? (<Spinner/>) : (<img src={gif} width = '350'/>)
           }
           
           <input
             className='tag-input' 
              onChange={(event) => setTag(event.target.value)}
              value={tag}
           />
           
           <button onClick={() => fetchData(tag)} className='rand-btn'>
                Generate
            </button>
        </div>
    )
}

export default Tag