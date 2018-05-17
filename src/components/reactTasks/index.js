import React from 'react'
import logo from './images/youtube.png'
import Category from './category'
import upload from './upload'
import Video from './video'

export default () => {
  return (
    <div>
      <img src={logo} alt="YouTube Logo" />
      <Category topic={'Entertainment'} type={'- Recommended for you'} />

      <div>
        {_.map(upload, (video, i) => <Video keys ={i} video= {video} />)}
      </div>
    </div>
  )
}

