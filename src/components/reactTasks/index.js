import React from 'react'
import Logo from './images/youtube.png'
import thumbnail1 from './images/thumbnail1.png'
import thumbnail2 from './images/thumbnail2.png'
import thumbnail3 from './images/thumbnail3.png'
import thumbnail4 from './images/thumbnail4.png'
import Video from './video'

export default () => {
  return (
    <div>
      <img src={Logo} alt="YouTube Logo" />

      <p>
        <img src={thumbnail1} alt="Thumbnail 1" />
        <Video title={'Viral Police Chase'} name={'Funny Vines'} />

        <img src={thumbnail2} alt="Thumbnail 2" />
        <Video title={'Johnny English Strikes Again'} name={'Universal Pictures'} />

        <img src={thumbnail3} alt="Thumbnail 3" />
        <Video title={'Incredibles 2 Trailer'} name={'Comicbook.com'} />

        <img src={thumbnail4} alt="Thumbnail 4" />
        <Video title={'Avatar 2'} name={'Looper'} />
      </p>
    </div>
  )
}
