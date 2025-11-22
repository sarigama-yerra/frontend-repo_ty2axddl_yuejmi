import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black">
            Train together. Stay consistent.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-600">
            Log workouts, earn streaks and badges, and share progress with friends—all in a minimalist interface built for focus.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#onboarding" className="inline-flex items-center justify-center px-5 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition">
              Get started
            </a>
            <a href="#feed" className="inline-flex items-center justify-center px-5 py-3 border border-neutral-200 rounded-lg text-black hover:bg-neutral-50 transition">
              Explore the feed
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  )
}
