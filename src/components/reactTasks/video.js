import React from 'react'

export default class Video extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.title}</p>
        <p>{this.props.thumbnail}</p>
      </div>
    )
  }
}
