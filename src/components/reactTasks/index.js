import React from 'react'
import logo from './images/youtube.png'
import Videos from './videos'
import Category from './category'
import upload from './upload'

export default () => {
  return (
    <div>
      <img src={logo} alt="YouTube Logo" />
      <Category topic={'Entertainment'} type={'- Recommended for you'} />

      <div>
        <Videos uploads = {upload} />
      </div>
    </div>
  )
}

