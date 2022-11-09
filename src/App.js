import React, { useMemo, useState, useCallback } from 'react';
import './App.css';
import Button from './components/Button';
import DemoList from './components/DemoList';

function App() {
  const arr = useMemo(() => [5, 10, 12, 3, 1, 15], [])
  const [title, setTitle] = useState('Lets Sort')
  const [btnText, setBtnText] = useState('Change to Asc')
  const changeTitle = useCallback(() => {
    if (btnText == 'Change to Asc') {
      setTitle('Changed to Ascending')
      setBtnText('Change to Desc')
      arr.sort((a, b) => {
        return a - b
      })
    }
    if (title == 'Changed to Ascending') {
      setTitle('Changed to Descending')
      setBtnText('Change to Desc')
      arr.sort((a, b) => {
        return b - a
      })

    }
    if (title == 'Changed to Descending') {
      setTitle('Changed to Ascending')
      setBtnText('Change to Asc')


    }


  }, [title, btnText, arr])

  return (
    <div className="App">
      <h1>Sort</h1>
      <DemoList title={title} num={arr} />
      <Button changeTitle={changeTitle} text={btnText} />
    </div>
  );
}

export default App;
