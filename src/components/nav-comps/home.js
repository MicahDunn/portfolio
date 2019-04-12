import React from "react";
import ReactDOM from 'react-dom';
import IosHomeOutline from "react-ionicons/lib/IosHomeOutline"
import { Spring } from 'react-spring'

class HomeIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inner: [(<IosHomeOutline className="nav-ionicons" />)],
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleEnter (e) {
    let id = e.currentTarget.dataset.id
    console.log(id)
    this.setState( (prevState, props) => ({
    inner: [(<span className="hovered-nav-icons" >{id}</span>)]
  }))
  }

 handleExit (e) {
    this.setState( prevState => ({
     inner: [(<IosHomeOutline className="nav-ionicons" />)]
    }))
  }
  render () {
    return (
      <li data-id="HOME" onMouseLeave={this.handleExit} onMouseEnter={this.handleEnter}>
{this.state.inner}
      </li>
    )
  }
}

export { HomeIcon }
