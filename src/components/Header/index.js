import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      className="image"
      alt="website logo"
    />
    <ul className="header-name-container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product">Products</Link>
      </li>
      <li>
        <Link to="cart">Cart</Link>
      </li>
      <button type="button" className="button">
        Logout
      </button>
    </ul>
  </div>
)
export default Header
