import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')

  return (
    <div className='w-full h-screen flex justify-center' style={{backgroundColor: color}}>
      <div className=' absolute justity-center items-center flex h-15 bottom-5 p-2 rounded-full gap-2'>
        <button
        className='bg-red-500 px-2 py-1 rounded-full text-white cursor-pointer'
        onClick={() => setColor('red')}
        >Red</button>
        <button
        className='bg-green-500 px-2 py-1 rounded-full text-white cursor-pointer'
        onClick={() => setColor('green')}
        >Green</button>
        <button
        className='bg-blue-500 px-2 py-1 rounded-full text-white cursor-pointer'
        onClick={() => setColor('blue')}
        >Blue</button>
        <button
        className='bg-gray-500 px-2 py-1 rounded-full text-white cursor-pointer'
        onClick={() => setColor('gray')}
        >Reset</button>
      </div>
    </div>
  )
}

export default App
