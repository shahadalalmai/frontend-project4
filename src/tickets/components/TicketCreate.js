import React, { Component } from 'react';
import { create } from "../api";
import { Link } from 'react-router-dom'

class TicketCreate extends Component {
    state = { 
        ticket: {
            source: "",
            destination: "",
            date: "",
            price: 25
        }
     } // end state

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
        // const formDataCopy = {...this.state.formData}
        const ticket = {...this.state.ticket}
        // console.log(this.state)
        // console.log(ticket)
        create(ticket) 
        .then(() => alert("Ticket Created Sucessfully"))
        //.then(() => console.log(ticket))
        .catch((error) => console.log(error))
    }
    
// NOTE: USe React Component and make stations in an array. USe the link
// https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/forms/

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Source: </label>
                    <input onChange={this.handleChange} type="text" name="source" value={this.state.ticket.source} placeholder="Source Station"/><br/>
                    <label>Destination: </label>
                    <input onChange={this.handleChange} type="text" name="destination" value={this.state.ticket.destination} placeholder="Destination Station"/><br/>
                    <label>Date: </label>
                    <input onChange={this.handleChange} type="text" name="date" value={this.state.ticket.date} placeholder="Date"/><br/>
                    <label>Price: {this.state.ticket.price} SAR</label> <br/>
                    <input type="submit" value="Submit"/>
                </form>
            <Link to="/tickets"> Back</Link>
            </div>
         )
    }
}
 
export default TicketCreate;