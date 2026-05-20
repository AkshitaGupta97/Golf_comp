import Navbar from './page/Navbar'
import Home from './page/Home'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-8">
        <Home />
      </main>
    </div>
  )
}

export default App
