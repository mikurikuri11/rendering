import { useState, useCallback } from 'react'
import './App.css'
import ChildArea from './ChildArea'

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const displayValue = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(!open), []);

  return (
    <>
      <input value={text} onChange={onChangeText} />
      <button onClick={displayValue}>表示</button>
      {/* { open && <ChildArea /> } */}
      <ChildArea open={open} onClickClose={onClickClose} />
    </>
  )
}

export default App
