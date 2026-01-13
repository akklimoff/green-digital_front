import React from 'react'
import { FaLeaf, FaLaptop } from 'react-icons/fa'

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="relative">
            <FaLeaf className="text-6xl text-green-400 animate-pulse" />
          </div>
          <div className="relative">
            <FaLaptop className="text-6xl text-white animate-pulse" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
          Green & Digital Office
        </h2>
        <p className="text-lg text-primary-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          КГТУ им. И. Раззакова
        </p>

        {/* Spinner */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
