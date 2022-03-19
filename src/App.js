import React,{useEffect} from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { getCountryData, getSummary } from "./redux/action/action";
import SummaryCard from "./components/cards";
import Filters from "./components/Filters/Filters";
import EnhancedTable from "./components/Table/Table";
import Chart from "./components/charts/Chart";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSummary());
  }, [dispatch]);

  return (
    <div className="App">
       <h1>Covid19 Tracker Dashboard</h1>
       <Filters/>
       <SummaryCard/>
       <EnhancedTable/>
       <Chart/>
    </div>
  );
}

export default App;
