import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo';
import type { Product } from './types/product';

function App() {
  const [count, setCount] = useState<number>(0)
  const [info, setInfo] = useState<Product>({
    name: "Huong",
    age: 21
  });

  return (
    <div className='App'>
      <ShowInfo person={info} />
      {count}<button onClick={() => (setCount((count) => count + 1))}>Click</button>

    </div>
  )
}

export default App
