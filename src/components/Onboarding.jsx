import React, { useState } from 'react'

export default function Onboarding({ onSave }) {
  const [height, setHeight] = useState(175)
  const [weight, setWeight] = useState(72)
  const [goal, setGoal] = useState('fitness')

  const handleSave = () => {
    onSave?.({ height_cm: height, weight_kg: weight, goal })
  }

  return (
    <section id="onboarding" className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">Build your profile</h2>
        <p className="mt-2 text-neutral-600">Quick setup with intuitive sliders. Tailor stats for accurate insights.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-neutral-200">
            <label className="text-sm font-medium text-neutral-700">Height</label>
            <div className="flex items-center gap-4 mt-4">
              <input type="range" min="130" max="220" value={height} onChange={(e)=>setHeight(parseInt(e.target.value))} className="w-full" />
              <span className="w-16 text-right font-semibold">{height} cm</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-neutral-200">
            <label className="text-sm font-medium text-neutral-700">Weight</label>
            <div className="flex items-center gap-4 mt-4">
              <input type="range" min="40" max="150" value={weight} step="0.5" onChange={(e)=>setWeight(parseFloat(e.target.value))} className="w-full" />
              <span className="w-16 text-right font-semibold">{weight} kg</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-neutral-200">
            <label className="text-sm font-medium text-neutral-700">Goal</label>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {['strength','aesthetics','fitness'].map((g)=> (
                <button key={g} onClick={()=>setGoal(g)} className={`px-3 py-2 rounded-lg border text-sm capitalize ${goal===g? 'bg-black text-white border-black':'border-neutral-200 hover:bg-neutral-50'}`}>
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button onClick={handleSave} className="px-5 py-3 bg-black text-white rounded-lg hover:bg-neutral-800">Save profile</button>
        </div>
      </div>
    </section>
  )
}
