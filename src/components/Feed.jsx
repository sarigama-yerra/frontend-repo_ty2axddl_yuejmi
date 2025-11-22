import React from 'react'

export default function Feed() {
  return (
    <section id="feed" className="bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-black">Community activity</h3>
        <p className="text-neutral-600">Celebrate progress with friends through reactions and comments.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="p-6 rounded-xl border border-neutral-200">
              <div className="text-sm text-neutral-500">Today</div>
              <div className="font-semibold text-black mt-1">Alex hit a new PR on Deadlift</div>
              <div className="mt-3 flex gap-2">
                <button className="px-3 py-1.5 rounded-lg border border-neutral-200">🔥</button>
                <button className="px-3 py-1.5 rounded-lg border border-neutral-200">👏</button>
                <button className="px-3 py-1.5 rounded-lg border border-neutral-200">⭐</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
