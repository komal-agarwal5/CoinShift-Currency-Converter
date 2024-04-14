import React from 'react'
import './Convert.css'
import bg from '../images/bg.png'
const Convert = () => {
  return (
    <div className='flex justify-evenly'>
    <div className='border-2 rounded-md border-red-900 flex flex-col justify-center items-center mx-5 my-5' id='card'>
      <input type="text" placeholder='Enter amount' className='text-center mx-5 my-5 border-2 border-black rounded-md' id='entamt'/>
      <input type="select" placeholder='Currency from' className='text-center mx-5 my-5 border-2 border-black rounded-md' id='currfrom'/>
      <button className='border-2 rounded-2xl border-black mx-5 my-5'>change</button>
      <input type="select" placeholder='Currency to' className='text-center mx-5 my-5 border-2 border-black rounded-md' id='currto'/>
      <p>output value</p>
    </div>
    <div>
      <img src={bg} alt="" width={500} height={500}/>
    </div>
    </div>
  )
}

export default Convert
