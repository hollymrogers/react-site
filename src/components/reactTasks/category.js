import React from 'react'

export default class Category extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.topic} {this.props.type}
        </h1>
      </div>
    )
  }
}
