import React from 'react'
import '../css/Loading.css'

function Loading() {
  return (
    <div className='loading'>
      <div className='loadingDiv'>
        <img className='loadLogo' src={process.env.PUBLIC_URL + '/images/load.gif'} alt="" />
      </div>
    </div>
  )
}

export default Loading
