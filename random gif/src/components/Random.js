import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

export default function Random() {

    const { gif,loading,fetchData} = useGif();

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[20px]'>

        <h1 className='text-xxl underline font-bold'>A Random Gif</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif} alt="" />)
        }

        

        <button className='bg-white w-10/12 opacity-60 text-lg py-2 rounded-lg mb-[20px]' onClick={() => fetchData()}>
            Generate
        </button>

    </div>
  )
}
