import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { show, update } from "../api";

class TicketUpdate extends Component {
    state = { 
        ticket: {
            source: "",
            destination: "",
            date: "",
            price: 25
        }
     }

    componentDidMount() {
        const user = this.props.user
        const ticketId = this.props.match.params.id
        show(user, ticketId)
        .then( response => {
            const ticket = response.data.ticket
            this.setState({
                ticket: ticket
            })
        })
        .catch(error => console.log(error))
     } // end CDM

     handleChange = (event) => {
        const inputTagName = event.target.name
        const inputValue = event.target.value
        const formDataCopy = {...this.state.ticket} // copied the current state form
        formDataCopy[inputTagName] = inputValue // update the keys' values
        this.setState({ // update the formData in my state with the search keyword the user entered in the form
            ticket: formDataCopy
        })
        // console.log(this.state.formData)
    } // end handlechange

    handleSubmit = (event) => {
        event.preventDefault()
        const user = this.props.user
        // const formDataCopy = {...this.state.formData}
        const ticket = {...this.state.ticket}
        const ticketId = this.props.match.params.id
        // console.log(this.state)
        // console.log(ticket)
        update(user, ticket, ticketId)
        .then(() => alert("Ticket Updated Sucessfully"))
        .then(() => this.props.history.push('/tickets'))
        // .then(() => console.log(ticket))
        .catch((error) => console.log(error))
    } // end handleSubmit


    render() { 
        console.log(this)
        return ( 
        <div>
            <h1>Hi this is TicketUpdate Component</h1>
            <form onSubmit={this.handleSubmit}>
                    <label>Source: </label>

                    <select name="source" value={this.state.ticket.source} onChange={this.handleChange}>
                        <option value="Olaya Metro Station">Olaya Metro Station</option>
                        <option value="Western Metro Station">Western Metro Station</option>
                        <option value="King Abdullah Financial District Metro Station">King Abdullah Financial District Metro Station</option>
                        <option value="Qasr Al-Hukm Metro Station">Qasr Al-Hukm Metro Station</option>
                    </select> <br/>
                    
                    {/* <input onChange={this.handleChange} type="text" name="source" value={this.state.ticket.source} placeholder="Source Station"/><br/> */}
                    
                    <label>Destination: </label>

                    <select name="destination" value={this.state.ticket.destination} onChange={this.handleChange}>
                        <option value="Olaya Metro Station">Olaya Metro Station</option>
                        <option value="Western Metro Station">Western Metro Station</option>
                        <option value="King Abdullah Financial District Metro Station">King Abdullah Financial District Metro Station</option>
                        <option value="Qasr Al-Hukm Metro Station">Qasr Al-Hukm Metro Station</option>
                    </select>  <br/>

                    {/* <input onChange={this.handleChange} type="text" name="source" value={this.state.ticket.source}/> <br/>
                    <label>Destination: </label>
                    <input onChange={this.handleChange} type="text" name="destination" value={this.state.ticket.destination}/> <br/> */}
                    <label>Date: </label>
                    {/* <input onChange={this.handleChange} type="text" name="date" value={this.state.ticket.date}/> <br/> */}
                    <input onChange={this.handleChange} type="date" name="date" value={this.state.ticket.date}/><br/>
                    
                    <label>Price: {this.state.ticket.price} SAR</label> <br/>
                    <input type="submit" value="Submit"/>
                    <Link to="/tickets"> Back</Link>
            </form>
        </div> )
    }
}
 
export default withRouter(TicketUpdate)