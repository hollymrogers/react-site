import React from 'react'
import logo from './images/youtube.png'
import thumbnail1 from './images/thumbnail1.png'
import thumbnail2 from './images/thumbnail2.png'
import thumbnail3 from './images/thumbnail3.png'
import thumbnail4 from './images/thumbnail4.png'
import Video from './video'
import Category from './category'

export default () => {
  return (
    <div>
      <img src={logo} alt="YouTube Logo" />
      <h1>
        <Category topic={'Entertainment'} type={'- Recommended for you'} />
      </h1>

      <div>
        <Video
          uploads={[
            { name: 'Funny Vines', image: thumbnail1, title: 'Viral Police Chase', views: '2M Views', date: 'April 12th 2018' },
            { name: 'Universal Pictures', image: thumbnail2, title: 'Johnny English Strikes Again', views: '8.8M Views', date: 'April 19th 2018' },
            { name: 'Comicbook.com', image: thumbnail3, title: 'Incredibles 2 Trailer', views: '2.9M Views', date: 'April 20th 2018' },
            { name: 'Looper', image: thumbnail4, title: 'Avatar 2', views: '2.6M Views', date: 'April 18th 2018' },
          ]}
        />
      </div>
    </div>
  )
}
