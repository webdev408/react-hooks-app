import { useState, useRef } from 'react';

function Focus() {
  const inputRef = useRef(null);
  const [input, setInput] = useState('Using useRef hook')
  
  const changeText = () => {
    setInput(inputRef.current.value)
  }
  return (
    <div className='user-detail'>
      <h2>{input}</h2>
      <input type="text" placeholder="Example..." ref={ inputRef} />
      <button onClick={changeText}>change text</button>
    </div>
  )
}

export default Focus;