import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-4/5 mx-auto'>
          <h1 className='text-red-300 text-xl text-center'> see how this score is icreasing {count} </h1>
          <button className='mx-auto' onClick={() => setCount(count + 1) }> Click to increase</button>
        </div>
    </>
  )
}

export default App
