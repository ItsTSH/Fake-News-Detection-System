import React from 'react'

export const HeroText = () => {
  return (
    <div className ="dark:text-white h-200 flex flex-col items-center justify-center space-y-2 p-3">
      <h1 className= "text-2xl font-bold">Verify Your News</h1>
      <TextInput />
      <div className="w-full max-w-md h-2 bg-gray-300 rounded">
        {/* Progress bar */}
        <div className="h-full bg-blue-500 rounded" style={{ width: '50%' }} />
      </div>
    </div>
  )
}

