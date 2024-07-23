import React from 'react';
import './App.css'

const Counter = React.lazy(() => import('./components/Counter'));

function App() {
  return (
    <div className='flex flex-col gap-y-12 items-center justify-center min-h-dvh'>
      <Counter />
    </div>
  );
}

export default App;
