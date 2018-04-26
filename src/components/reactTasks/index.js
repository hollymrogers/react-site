import React from 'react'
import Logo from './images/youtube.png'
import thumbnail1 from './images/thumbnail1.png'
import thumbnail2 from './images/thumbnail2.png'
import thumbnail3 from './images/thumbnail3.png'
import thumbnail4 from './images/thumbnail4.png'
import Video from './video'
import Category from './category'

export default () => {
  return (
    <div>
      <img src={Logo} alt="YouTube Logo" />
      <h1>
        <Category topic={'Entertainment'} type={'- Recommended for you'} />
      </h1>

      <p>
        <Video image={thumbnail1} title={'Viral Police Chase'} name={'Funny Vines'} views={'2M Views'} date={'12.04.18'} />

        <Video image={thumbnail2} title={'Johnny English Strikes Again'} name={'Universal Pictures'} views={'8.8M Views'} date={'19.04.18'} />

        <Video image={thumbnail3} title={'Incredibles 2 Trailer'} name={'Comicbook.com'} views={'2.9M Views'} date={'20.04.18'} />

        <Video image={thumbnail4} title={'Avatar 2'} name={'Looper'} views={'2.6M views'} date={'18.04.18'} />
      </p>
    </div>
  )
}
