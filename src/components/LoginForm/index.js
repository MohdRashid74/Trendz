import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: ''}

  getsuceeslogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.getsuceeslogin()
    }
    return "didn't match"
  }

  onChangeusername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password} = this.state

    return (
      <div className="login-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="login-image"
            alt="website login"
          />
        </div>
        <div className="input-container">
          <div className="input-small-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="image3"
              alt="website logo"
            />
            <form className="form" onSubmit={this.onSubmitForm}>
              <label className="username" htmlFor="username">
                USERNAME
              </label>
              <br />
              <input
                type="text"
                id="username"
                className="input"
                placeholder="Username"
                onChange={this.onChangeusername}
                value={username}
              />
              <br />
              <label className="username" htmlFor="password">
                PASSWORD
              </label>
              <br />
              <input
                type="password"
                id="password"
                className="input"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={password}
              />
              <br />
              <button type="submit" className=" submit-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginForm
