import { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

export default function Tag() {
    const [tag, settag] = useState('')

    const {gif,loading,fetchData} = useGif(tag);

    // function changeHandler(event)
    // {
    //   settag(event.target.value)
    // }

  return (
    <div className='w-1/2 bg-blue-800 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[20px]'>

        <h1 className='text-xxl underline font-bold'>Random {tag} Gif</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif} width="450" />)
        }

        <input 
        placeholder='enter the name of gif'
        className='bg-white w-10/12 opacity-60 text-lg py-2 rounded-lg text-center' 
        onChange={(event) => settag(event.target.value)} 
        value={tag}
        />

        <button onClick={() => fetchData()} className='bg-white w-10/12 opacity-60 text-lg py-2 rounded-lg mb-[20px]' >
            Generate
        </button>

    </div>
  )
}
