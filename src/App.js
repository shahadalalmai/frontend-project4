import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import TicketsIndex from "./tickets/components/TicketsIndex";
import TicketShow from "./tickets/components/TicketShow";
// import { index, destroy } from "./tickets/api";
import TicketCreate from "./tickets/components/TicketCreate"
import TicketUpdate from "./tickets/components/TicketUpdate";
import ToursIndex from './tours/ToursIndex'
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "./footer/Footer";
import Stations from "./stations/Stations";

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      cart : []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }


  addToCart = (tour) => {
          let copyState = {...this.state}
          copyState.cart.push(tour)
          this.setState(copyState)
  } // end addToCart

//https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2014/09/30/1411997904686549900.jpg?itok=MtKXzByS
  render () { //http://riyadhmetro.sa/wp-content/uploads/2018/01/5C0A5883.jpg
    const images = [ 
      { url: "https://live.staticflickr.com/65535/49488910911_d886678e8a_k.jpg" }, //src/images/1.jpg
      { url: "http://riyadhmetro.sa/wp-content/uploads/2017/01/station6.jpg" },
      { url: "https://s3.eu-central-1.amazonaws.com/news-image-2.motory.com/n-636x320/news0-1452439615.jpeg" },
      { url: "http://riyadhmetro.sa/wp-content/uploads/2017/01/station1.jpg" },
      { url: "http://riyadhmetro.sa/wp-content/uploads/2017/01/station2.jpg" },
      { url: "http://riyadhmetro.sa/wp-content/uploads/2017/01/station3.jpg" },
      { url: "http://riyadhmetro.sa/wp-content/uploads/2017/01/station5.jpg" },
      { url: "http://riyadhmetro.sa/wp-content/uploads/2017/01/station6.jpg" }
  ]


  const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        
        <Route path="/" exact render={() => (
            <div className="slider">
              <SimpleImageSlider
               width={1400}
               height={504}
               images={images}
              />
            </div>
            )}/>

        <Route path="/" exact render={() => (
          <Stations/>
            )}/>

        
        
        
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />

          <Route path="/" exact render={() => (
            <div>
              
              <ToursIndex cart={this.state.cart} addToCart={this.addToCart}/>
            </div>
            )}/>

          

          {/* <Route path="/tickets" exact render={ () => ( <TicketsIndex tickets={this.state.tickets} delete={this.destroy}/>) }/> */}

          {/* I'm not showing /tickets unless the user is authenticated */}
          <AuthenticatedRoute user={user} path="/tickets" exact render={ () => ( 
          <TicketsIndex user={user} />) }/>
          
          {/* <Route path="/ticket/new" exact render={ () => ( 
          <TicketCreate />) }/> */}

          <AuthenticatedRoute user={user} path="/ticket/new" exact render={ () => ( 
          <TicketCreate user={user} />) }/>

          <AuthenticatedRoute user={user} path="/ticket/edit/:id" exact render={ () => ( 
          <TicketUpdate user={user}/>) }/>

          <AuthenticatedRoute user={user} path="/tickets/:id" render={ () => ( 
          <TicketShow user={user} />) }/>

        </main>

        <Footer/>

      </React.Fragment>
    )
  }
}

export default App
