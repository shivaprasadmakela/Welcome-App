// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: false}

  subscribeclicked = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  getButtonText = () => {
    const {isLoggedIn} = this.state

    return isLoggedIn ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button
          className="button"
          type="button"
          onClick={this.subscribeclicked}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
