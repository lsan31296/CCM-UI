import './App.css';
import { Route, Routes } from "react-router-dom";
import RiskHoldings from './components/RiskHoldings';
import DesktopBar from './layout/DesktopBar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Dashboard from './dashboard/Dashboard';
import { getBusinessDay } from './utils/api';
import { today } from './utils/helperFunctions';
import { useEffect, useState } from 'react';

function App() {
  const [previousBD, setPreviousBD] = useState(null);

  async function loadDate() {
    console.log("Loading Date");
    const abortController = new AbortController();

    const defaultDate = await getBusinessDay({ inputDate: today(), nextNDays: -1 });
    setPreviousBD(defaultDate[0].next_business_day.slice(0, 10));

    return () => abortController.abort();
  }
  useEffect(() => {loadDate()}, []);


  if (!previousBD) {
    return <h1>Loading...</h1>
  } else {
    return (
      <>
        <DesktopBar />
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Dashboard previousBD={previousBD}/>} />
            <Route path='/risk/:aoDate/:positionView/:accounts/:aggregateRows' element={<RiskHoldings />} />
          </Routes>
        </main>

        <Footer />
      </>

    );
  }
}

export default App;
