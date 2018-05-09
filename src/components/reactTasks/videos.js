import React from 'react'
import Video from './video' 

export default class Videos extends React.Component {
  render() {
  	const upload = _.map(this.props.uploads, (video, i) => <Video key={i} video={video} />)
	return <div> {upload}  </div>
  }
}


