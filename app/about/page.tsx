import React from 'react'
import { Button } from '@/components/ui/button'

function About() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent'>About</h1>
        <Button className='bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 text-white'>Click me</Button>
    </div>
  )
}

export default About