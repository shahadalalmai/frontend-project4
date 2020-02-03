import React, { Component } from 'react';
import { index, destroy } from "../api";
// import { Route } from 'react-router-dom'
// import TicketShow from "./TicketShow";
import { Link , withRouter} from 'react-router-dom'


class TicketsIndex extends Component {
    state = { 
        tickets: []
     }

    componentDidMount(){
        const user = this.props.user
        index(user) // excuting the api
        .then( (response) => {
            const tickets = response.data.tickets
            this.setState({
                tickets: tickets
            })
        })
        .catch(error => console.log(error))
    } // end CWM

    destroy = (id) => {
        const user = this.props.user
        destroy(user, id) // first authorize the user, then display his resource
        .then( () => alert("Are you sure you want to Delete?"))
        .then( () => {
            const tickets = this.state.tickets.filter( (ticket) => ticket._id !== id) // filtering the tickets array to only display the ones that are no deleted. This is to remove the ticket from the front end by updating the state
            this.setState({
                tickets: tickets
            })
        })
        .catch( error => console.log(error))
    } // end destroy
    
    // show = (id) => {
    //     console.log(`Hi this is ${id}`)

    // }

    render() { 
        // console.log(this.props)
        return (  
            <div>
                
                <h1>Tickets Index Component</h1>
                {this.state.tickets.map( (ticket, index) => (
                    <div key={index}>
                       <p>Source: {ticket.source} </p>
                       <p>Destination: {ticket.destination} </p> 
                       {/* .format("DD-MM-YYYY") */}
                       {/* <p>Date: {(ticket.date).substring(0, 10)} </p>  */}
                       <p>Date: {ticket.date} </p> 
                       <p>Price: {ticket.price} SAR</p>
                       <button><Link to={`/tickets/${ticket._id}`}> Show Route</Link></button> ||
                       <button><Link to={`/ticket/edit/${ticket._id}`}> Update</Link></button> ||
                       <button onClick={() => this.destroy(ticket._id)}> Cancel </button>
                       <hr/>
                    </div>
                ) )}
            </div>
         )
    }
}
 
export default withRouter(TicketsIndex)