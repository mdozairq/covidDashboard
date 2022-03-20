import React,{useEffect, useState} from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { getCountryData, getSummary } from "./redux/action/action";
import SummaryCard from "./components/cards";
import Filters from "./components/Filters/Filters";
import EnhancedTable from "./components/Table/Table";
import Chart from "./components/charts/Chart";
import PieChart from "./components/charts/PieChart";
import { Divider } from "@mui/material";

function App() {
  const [value, setValue] = useState('Global');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSummary());
  }, [dispatch]);

  return (
    <div className="App">
       <h1>Covid19 Tracker Dashboard</h1>
       <Filters setValue={setValue} value={value} />
       <SummaryCard value={value}/>
       <PieChart value={value}/>
       <Divider />
       <h2>Country wise Covid19 Stats:</h2>
       <EnhancedTable/>
       <Chart/>
       <p><em>Developed by Md Ozair Qayam</em></p>
    </div>
  );
}

export default App;
