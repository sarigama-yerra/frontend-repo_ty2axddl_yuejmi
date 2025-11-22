import React, { useEffect, useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Dashboard() {
  const [profile, setProfile] = useState(null)
  const [feed, setFeed] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user_id = 'demo-user'
    // Fetch profile
    fetch(`${api}/api/profiles/${user_id}`).then(async (r) => {
      if (r.ok) {
        const data = await r.json()
        setProfile(data)
      }
    }).finally(()=> setLoading(false))

    // Fetch feed
    fetch(`${api}/api/feed`).then(async (r) => {
      if (r.ok) {
        const items = await r.json()
        setFeed(items)
      }
    })
  }, [])

  return (
    <section className="bg-white border-t border-neutral-200" id="dashboard">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-black">Your dashboard</h3>
            <p className="text-neutral-600">Smart routines, adaptive insights, and visual progress analytics.</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-extrabold tracking-tight">{profile?.streak || 7}<span className="text-neutral-500 text-base font-medium ml-1">day streak</span></div>
            <div className="text-sm text-neutral-500">Badges: 🔥 💪 ⭐</div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="col-span-2 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-800">Recent activity</h4>
            <div className="mt-4 space-y-4">
              {feed.length === 0 && <p className="text-neutral-500">No workouts yet. Log your first session!</p>}
              {feed.map(item => (
                <div key={item.id} className="p-4 border border-neutral-200 rounded-lg">
                  <div className="text-sm text-neutral-500">{new Date(item.performed_at || Date.now()).toLocaleString()}</div>
                  <div className="font-medium text-black">Workout by {item.user_id}</div>
                  <div className="text-sm text-neutral-600">{item.workout?.exercises?.length || 0} exercises</div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-800">Quick log</h4>
            <QuickLog onLogged={(w)=> setFeed([{
              id: String(Date.now()),
              type: 'workout',
              user_id: 'demo-user',
              performed_at: new Date().toISOString(),
              workout: w
            }, ...feed])} />
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickLog({ onLogged }) {
  const [name, setName] = useState('Bench Press')
  const [reps, setReps] = useState(8)
  const [weight, setWeight] = useState(60)
  const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async () => {
    const workout = {
      user_id: 'demo-user',
      exercises: [{ name, sets: [{ reps, weight }] }],
      performed_at: new Date().toISOString()
    }
    const res = await fetch(`${api}/api/workouts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workout)
    })
    if (res.ok) {
      onLogged?.(workout)
    }
  }

  return (
    <div>
      <label className="block text-sm text-neutral-700">Exercise</label>
      <input className="mt-1 w-full border border-neutral-200 rounded-lg px-3 py-2" value={name} onChange={e=>setName(e.target.value)} />

      <div className="grid grid-cols-2 gap-3 mt-3">
        <div>
          <label className="block text-sm text-neutral-700">Reps</label>
          <input type="number" min="1" className="mt-1 w-full border border-neutral-200 rounded-lg px-3 py-2" value={reps} onChange={e=>setReps(parseInt(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm text-neutral-700">Weight (kg)</label>
          <input type="number" min="0" step="0.5" className="mt-1 w-full border border-neutral-200 rounded-lg px-3 py-2" value={weight} onChange={e=>setWeight(parseFloat(e.target.value))} />
        </div>
      </div>
      <button onClick={submit} className="mt-4 w-full bg-black text-white rounded-lg py-2 hover:bg-neutral-800">Log workout</button>
    </div>
  )
}
