import React, { Component } from 'react';
import { index } from "./api";
// import { Link , withRouter} from 'react-router-dom'
import Card from'react-bootstrap/Card'
import CardColumns from'react-bootstrap/CardColumns'
import './ToursIndex.css'

class ToursIndex extends Component {
    state = { 
        tours: []
     }
    
    componentDidMount(){
        index()
        .then( (response) => {
            const tours = response.data.tours
            this.setState({
                tours: tours
            })
        })
        .catch(error => console.log(error))
    } // end CDM

    render() { 
        return ( 
            <div>
            <h2 style={ {textAlign: "center", marginBottom: "3%", marginTop: "2%"}}>Top Tours</h2>
            <CardColumns>
                {this.state.tours.map( (tour, index) => (
                    <Card className="h" key={index}>
                       <img className="CardImg" src={tour.img} alt="" width="203" height="114" />
                       <div className="cardBody">
                            <h5>{tour.title} </h5>
                           <img className="imgFloat" src="https://cdn4.iconfinder.com/data/icons/banking-solid-style/24/banking-office-hour-512.png" width="15" height="15" alt=""/> 
                           <p style={ {color: "gray"}} > <span style={ {color: "gray", fontWeight: "bold"}}> Duration: </span> {tour.duration} </p> 
                            <p className={"status"}> {tour.status} </p> 
                            <img src="https://media.istockphoto.com/vectors/fivestar-rating-icon-vector-id922744942?k=6&m=922744942&s=170667a&w=0&h=4EhAy-gCG4sLvNusPr-TKgnDcNp_AXXFXdT-fazaQ2Y=" width="120" height="50" alt="" />
                            <p style={ {color: "#a9a9a9"}}>{tour.reviews} Reviews</p> 
                            
                            <h4 className={"bottomRight"}>{tour.price} SAR </h4> 
                       </div>
                       {/* <button><Link to={`/tickets/${ticket._id}`}> Show Route</Link></button> ||
                       <button><Link to={`/ticket/edit/${ticket._id}`}> Update</Link></button> ||
                       <button onClick={() => this.destroy(ticket._id)}> Cancel </button> */}
                    </Card>
                ) )}
            </CardColumns>
            </div>
         )
    }
}
 
export default ToursIndex;
