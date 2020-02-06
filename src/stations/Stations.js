import React, { Component } from 'react';
import './Stations.css';
import Card from'react-bootstrap/Card'
import CardColumns from'react-bootstrap/CardColumns'


class Stations extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="stationsbg">
                <CardColumns className="stationsColum">
                    <Card className="stations">
                    <h4 style={{paddingTop: "3%", color: "#717070"}}>85 Train Stations</h4><br/>
                    <img src="https://lh3.googleusercontent.com/proxy/SzACpvcLfGJE8fZSib8sivKm2QTNDLL2TZlorlrqKhPbKkCItaCzPf3qT_ECEPmzBxUtLZFGiXbdMA6OKieGs0GoPVfmZ0sQ5IGab1UMtg" alt="" width="200" height="300" /> 
                    </Card>

                    <Card className="stations">
                    <h4 style={{paddingTop: "3%", color: "#717070"}}>6 Metro Lines</h4><br/>
                    <img src="https://arabiangazette.com/wp-content/uploads/2018/12/Riyadh-Metro-Route-Map-Arabian-Gazette.jpg" alt="" width="200" height="300" />  
                    </Card>

                    <Card className="stations">
                    <h4 style={{paddingTop: "3%", color: "#717070"}}>Spanning 176 Kilometers</h4><br/>
                    <img src="https://i.pinimg.com/originals/a8/cf/bb/a8cfbbc6b93d1e4474ddfdfb6821e03a.jpg" alt="" width="200" height="300" />  
                    </Card>

                </CardColumns>
            </div>
         )
    }
}
 
export default Stations;