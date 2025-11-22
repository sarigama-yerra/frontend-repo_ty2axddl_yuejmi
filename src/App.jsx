import React from 'react'
import Hero from './components/Hero'
import Onboarding from './components/Onboarding'
import Dashboard from './components/Dashboard'
import Feed from './components/Feed'

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const saveProfile = async (data) => {
    const payload = {
      user_id: 'demo-user',
      name: 'Demo User',
      height_cm: data.height_cm,
      weight_kg: data.weight_kg,
      goal: data.goal
    }
    try {
      await fetch(`${api}/api/profiles`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-xl">Momentum</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
            <a href="#onboarding" className="hover:text-black">Onboarding</a>
            <a href="#dashboard" className="hover:text-black">Dashboard</a>
            <a href="#feed" className="hover:text-black">Feed</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Onboarding onSave={saveProfile} />
        <Dashboard />
        <Feed />
      </main>

      <footer className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-neutral-500">Designed for focus. Built for consistency.</div>
      </footer>
    </div>
  )
}

export default App
