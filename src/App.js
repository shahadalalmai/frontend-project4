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

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []//,
      // tickets: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

//   componentDidMount(){
//     index() // excuting the api
//     .then( (response) => {
//         const tickets = response.data.tickets
//         let copyState = {...this.state}
//         copyState.tickets = tickets
//         this.setState(copyState)
//     })
//     .catch(error => console.log(error))
// } // end CWM

//   destroy = (id) => {
//       destroy(id)
//       .then( () => alert("Are you sure you want to Delete?"))
//       .then( () => {
//           const tickets = this.state.tickets.filter( (ticket) => ticket._id !== id)
//           let copyState = {...this.state}
//           copyState.tickets = tickets
//           this.setState(copyState)
//       })
//       .catch( error => console.log(error))
//   } // end destroy





  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
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
      </React.Fragment>
    )
  }
}

export default App
