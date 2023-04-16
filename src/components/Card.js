import React from "react";
import { useEffect, useState } from "react";
import CovidDataCard from "./CovidDataCard";

const Card = () => {
  const [StateWiseData, setStateWiseData] = useState({});
  const GetCovidData = async () => {
    try {
      const ApiUrl = await fetch("https://data.covid19india.org/data.json");
      const data = await ApiUrl.json();
      setStateWiseData(data.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetCovidData();
  }, []);
  return <CovidDataCard StateWiseData={StateWiseData} />;
};
export default Card;
