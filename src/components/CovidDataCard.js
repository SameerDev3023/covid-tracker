import React from "react";
import "./ComponentsCss/CovidCard.css";

const AddDataCard = (props) => {
 const CovidData = props.StateWiseData
  return (
    <React.Fragment>
      <div className="container">
        <div className="main-heading bg-dark text-white ">Covid Tracker 🔴</div>
        <div className="row">
          <div className="column col-md-4">
            <div className="card bg-success text-white">
              <h3>Recovered</h3>
              <p>{CovidData.recovered}</p>
              <p>This is a crona recoverd cases</p>
            </div>
          </div>
          <div className="column col-md-4 ">
            <div className="card bg-danger text-white">
              <h3>Deaths</h3>
              <p>{CovidData.deaths}</p>
              <p>Deaths of carona patiens </p>
            </div>
          </div>
          <div className="column col-md-4">
            <div className="card bg-warning text-white ">
              <h3>Delta Recovered</h3>
              <p>{CovidData.deltarecovered}</p>
              <p>Covid Delta Recoverds</p>
            </div>
          </div>
        </div>
        <div className="row section2">
          <div className="column col-md-4">
            <div className="card bg-primary text-white">
              <h3>Active</h3>
              <p>{CovidData.active}</p>
              <p>This is Active Cases</p>
            </div>
          </div>
          <div className="column col-md-4">
            <div className="card bg-secondary text-white">
              <h3>Confirmed</h3>
              <p>{CovidData.confirmed}</p>
              <p>Confirmed Carona Cases
              </p>
            </div>
          </div>
          <div className="column col-md-4">
            <div className="card bg-info text-white">
              <h3>last updated time</h3>
              <p>{CovidData.lastupdatedtime}</p>
              <p>Last Data updated time</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AddDataCard;
