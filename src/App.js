import './App.css';
import Routers from './components/Routers';
import React, { useState, useMemo } from 'react'


function App() {
  const [modal, setModal] = useState(false);
  const iam = useMemo(
    () => ({ name: 'Yulia', surname: 'Furashova', phone: '+90 (505) 742 38 64', email: 'juliapetrova95@gmail.com' }),
    []
  )
  return (
    <div className="app">
      <Routers iam={iam} modal={modal} setModal={setModal} />
    </div>
  );
}

export default App; 
