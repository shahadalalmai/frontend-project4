import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/tickets">Tickets</Link>
    <Link to="/ticket/new">Book Ticket</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <img src="data:image/png;base64,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" width="20" height="20"/><Link to="/sign-up">Sign Up</Link>
    <img src="https://www.uwwp.org/wp-content/plugins/smartcat_our_team/includes/member-portal/assets/images/user.png" width="20" height="20"/><Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMjZoXQLvwSKEJAPxPmWfyisaLf0iIN0xaytm4kSmcBhG1VG3k" width="25" height="25" /></Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <img src="https://upload.wikimedia.org/wikipedia/ar/thumb/6/6c/Riyadh_metro_logo.svg/573px-Riyadh_metro_logo.svg.png" alt="" width="200" height="70" />
    {/* <h1>Riyadh Metro</h1> */}
    <nav>
      { user && <span>Welcome, {(user.email).substring(0, 6)}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
