import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S'
const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useGif(tag) {
    const [gif, setgif] = useState('');
    const [loading, setloading] = useState('false')

    async function fetchData(tag)
    {
      setloading(true);
      
      const {data} = await axios.get(tag ? `${Url}&tag=${tag}` : `${Url}`);
      const imageSource = data.data.images.downsized_large.url; 
      // console.log(imageSource);
      setgif(imageSource);
      setloading(false);
    }

    useEffect( () =>{
      fetchData();
    },[])

    return {gif,loading,fetchData};

    // function changeHandler(event)
    // {
    //   settag(event.target.value)
    // }
}
