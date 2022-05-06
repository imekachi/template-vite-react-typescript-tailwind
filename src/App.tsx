import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8">
      <header className="App-header">
        <h1 className="text-center text-xl font-bold">
          Hello Vite + React + TS + Tailwind!
        </h1>
      </header>
      <div className="mt-8">
        <p className="text-center">
          <button
            type="button"
            className="rounded-lg bg-blue-600 py-2 px-4 text-white"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
      </div>
    </div>
  )
}

export default App
