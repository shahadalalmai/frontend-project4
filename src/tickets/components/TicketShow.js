import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { show } from "../api";
import Card from'react-bootstrap/Card'

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
            
            <Card className="cardBody" className='auth-form'>
                <h1 style={ {textAlign: "center", marginBottom: "3%", marginTop: "2%" , color: "#717070"}}>Your Ticket Details</h1>
                <img src="https://files.slack.com/files-pri/TA2AHQDQ8-FTHB9UJHE/shahad_alalmai_linkedin.png" width="120" height="120" alt="" />
                <p>Source: {this.state.ticket.source} </p>
                <p>Destination: {this.state.ticket.destination} </p> 
                <p>Date: {this.state.ticket.date} </p> 
                <p>Price: {this.state.ticket.price} SAR</p>
                <Link to="/tickets"> Back</Link>
            </Card>
         )
    }
}
 
export default withRouter(TicketShow)