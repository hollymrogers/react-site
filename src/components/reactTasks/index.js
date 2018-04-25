import React from 'react'
import Logo from './youtube.png'
import Thumbnail1 from './thumbnail1.png'
import Thumbnail2 from './thumbnail2.png'
import Thumbnail3 from './thumbnail3.png'
import Thumbnail4 from './thumbnail4.png'
import Title from './title'
import Name from './name'

export default () => {
  return (
    <div>
      <img src={Logo} alt="YouTube Logo" />

      <p>
        <img src={Thumbnail1} alt="Thumbnail 1" />
        <Title title={'Viral Police Chase'} />
        <Name name={'Funny Vines'} />

        <img src={Thumbnail2} alt="Thumbnail 2" />
        <Title title={'Johnny English Strikes Again'} />
        <Name name={'Universal Pictures'} />

        <img src={Thumbnail3} alt="Thumbnail 3" />
        <Title title={'Incredibles 2 Trailer'} />
        <Name name={'Comicbook.com'} />

        <img src={Thumbnail4} alt="Thumbnail 4" />
        <Title title={'Avatar 2'} />
        <Name name={'Looper'} />
      </p>
    </div>
  )
}
