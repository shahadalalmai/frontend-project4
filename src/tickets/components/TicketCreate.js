import React, { Component } from 'react';
import { create } from "../api";
import { withRouter, Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

class TicketCreate extends Component {
    state = { 
        ticket: {
            source: "Olaya Metro Station",
            destination: "Qasr Al-Hukm Metro Station",
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
        const user = this.props.user
        // const formDataCopy = {...this.state.formData}
        const ticket = {...this.state.ticket}
        // console.log(this.state)
        // console.log(ticket)
        create(user, ticket) 
        .then(() => alert("Ticket Created Sucessfully"))
        .then(() => this.props.history.push('/tickets'))
        //.then(() => console.log(ticket))
        .catch((error) => console.log(error))
    }
    
// NOTE: USe React Component and make stations in an array. USe the link
// https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/forms/

    render() { 
        return ( 
            <div className='auth-form'>
                <h1 style={{paddingBottom: "7%", color: "#717070"}}>Book Your Online Ticket</h1>
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

                    {/* <input onChange={this.handleChange} type="text" name="destination" value={this.state.ticket.destination} placeholder="Destination Station"/><br/> */}
                    
                    <label>Date: </label>

                    <input onChange={this.handleChange} type="date" name="date" value={this.state.ticket.date}/><br/>
                    
                    <label>Price: {this.state.ticket.price} SAR</label> <br/>
                    <input type="submit" value="Submit"/>
                </form>
            {/* <Link to="/tickets"> Back</Link> */}
            </div>
         )
    }
}
 
export default withRouter(TicketCreate);