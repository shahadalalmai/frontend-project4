import React, { Component } from 'react';
import { index, destroy } from "../api";
// import { Route } from 'react-router-dom'
// import TicketShow from "./TicketShow";
import { Link , withRouter} from 'react-router-dom'
import Card from'react-bootstrap/Card'
import CardColumns from'react-bootstrap/CardColumns'
import './TicketIndex.css'



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
    } // end CDM

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
                
                <h1 style={{paddingBottom: "7%", color: "#717070"}}>Your Tickets</h1>
                <CardColumns>
                {this.state.tickets.map( (ticket, index) => (
                    <Card className="cardBody" key={index}>
                        <img src="https://files.slack.com/files-pri/TA2AHQDQ8-FTHB9UJHE/shahad_alalmai_linkedin.png" width="120" height="120" alt="" />
                       <p>Source: {ticket.source} </p>
                       <p>Destination: {ticket.destination} </p> 
                       {/* .format("DD-MM-YYYY") */}
                       {/* <p>Date: {(ticket.date).substring(0, 10)} </p>  */}
                       <p>Date: {ticket.date} </p> 
                       <p>Price: {ticket.price} SAR</p>
                       <Link to={`/tickets/${ticket._id}`}> <img src="https://cdn0.iconfinder.com/data/icons/transport-14/512/Train_Green.png" alt="" width="45" height="45"/></Link> ||
                        <Link to={`/ticket/edit/${ticket._id}`}><img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/35-512.png" alt="" width="43" height="43"/> </Link>
                        || <img onClick={() => this.destroy(ticket._id)} src="https://cdn0.iconfinder.com/data/icons/basic-8/97/5-512.png" width="45" height="45" alt="" />  
                        
                        <Link className="bottomRight" to={`/tickets`}> <img src="https://www.festivalclaca.cat/imgfv/m/125-1257662_add-to-apple-wallet-badge-add-to-apple.png" alt="" width="150" height="55"/></Link>
                    </Card>
                ) )}
                </CardColumns>
            </div>
         )
    }
}
 
// <img src="https://www.festivalclaca.cat/imgfv/m/125-1257662_add-to-apple-wallet-badge-add-to-apple.png" width="80" height="20" alt="" />
export default withRouter(TicketsIndex)