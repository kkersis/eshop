import React from 'react'
import Loader from 'react-loader-spinner'

function LoadingScreen() {
    return (
        <div className="flex h-screen justify-center items-center"> 
            <Loader type="ThreeDots" color="orange" height={200} width={200} />
        </div>
    )
}

export default LoadingScreen
