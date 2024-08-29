import { Roboto_Flex } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='px-4 py-8 md:flex md:items-center gap-8 border justify-center' >
        <div className='flex justify-center'>
         <Image  alt='me' width={150} height={200} src='/img.jpg' className='rounded border-r-200' />
        </div>
        <div>
          <div className='text-center'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl tracking-wider'>I am Ebube Nwani</h1>
            <p className='text-lg font-medium'>I am a Web Developer</p>
            <p className='font-medium text-gray-400'> Dieonx</p>
          </div>
        </div>
    </div>
  )
}

export default Hero