import {Component} from 'react'

import './index.css'

import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="bg-container">
          <Header />
        </div>
        <div className="container">
          <div className="left-container">
            <h1 className="heading">Clothes That Get YOU Noticed</h1>
            <p className="paragraph2">
              Fashion is part of the daily air and it does not quit help that it
              changesall the time.Clothes have always been a marketof the era
              and we are in a revolution .Your fashion makes you been seen and
              heard that way you are So celibrate the seasions new and exciting
              fashion in your own way.
            </p>
            <button type="button" className="button2">
              Shop Now
            </button>
          </div>
          <div className="right-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
              className="image2"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
