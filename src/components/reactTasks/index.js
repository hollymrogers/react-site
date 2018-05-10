import React from 'react'
import logo from './images/youtube.png'
import thumbnail1 from './images/thumbnail1.png'
import thumbnail2 from './images/thumbnail2.png'
import thumbnail3 from './images/thumbnail3.png'
import thumbnail4 from './images/thumbnail4.png'
import Videos from './videos'
import Category from './category'
import Upload from './upload'

export default () => {
  return (
    <div>
      <img src={logo} alt="YouTube Logo" />
      <Category topic={'Entertainment'} type={'- Recommended for you'} />

      <div>
        <Videos uploads= {Upload} />
      </div>
    </div>
  )
}

