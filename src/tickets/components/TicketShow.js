import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { show } from "../api";

class TicketShow extends Component {
    state = { 
        ticket: {}
     }

     componentDidMount() {
        const user = this.props.user
        const ticketId = this.props.match.params.id // get the ticket id
        show(user, ticketId)
        .then( response => {
            const ticket = response.data.ticket
            this.setState({
                ticket: ticket
            })
        })
        .catch(error => console.log(error))
     }
    
    render() { 
        // console.log(this.props.match.params.id)
        // const ticketId = this.props.match.params.id
        return ( 
            
            <div className='auth-form'>
                <h1 style={ {textAlign: "center", marginBottom: "3%", marginTop: "2%"}}>Your Ticket Details</h1>
                <p>Source: {this.state.ticket.source} </p>
                <p>Destination: {this.state.ticket.destination} </p> 
                <p>Date: {this.state.ticket.date} </p> 
                <p>Price: {this.state.ticket.price} SAR</p>
                <Link to="/tickets"> Back</Link>
            </div>
         )
    }
}
 
export default withRouter(TicketShow)