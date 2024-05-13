import { Button } from '@/stories/Button'
import React from 'react'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text3x1 font-bold text-slate-400'> Next TS Starter</h1>
        <Button primary={true} label='Hello' />
      </div>
    </section>
  )
}
