import './App.css';
import 'devextreme/dist/css/dx.light.css'
import { Route, Routes } from "react-router-dom";
import RiskHoldings from './components/RiskHoldings';
import DesktopBar from './layout/DesktopBar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Dashboard from './dashboard/Dashboard';
import { getAllAccounts, getBusinessDay, getSecurities } from './utils/api';
import { today } from './utils/helperFunctions';
import { useEffect, useState } from 'react';
import ShareHolders from './shareholders/ShareHolders';
import CusipRiskHoldings from './cusip/CusipRiskHoldings';
import TradeHistoryLandingPage from './trade-history/TradeHistoryLandingPage';
import LandingPage from './home-landing/LandingPage';
import PortfolioTargetsPage from './portfolio-targets/PortfolioTargetsPage';
import VConnConfirmationPage from './vconn/VConnConfirmationPage';

function App() {
  const [previousBD, setPreviousBD] = useState(null);
  const [accountsInfo, setAccountsInfo] = useState(null);
  const [securities, setSecurities] = useState(null);

  async function loadDate() {
    console.log("Loading Date");
    const abortController = new AbortController();

    const defaultDate = await getBusinessDay({ inputDate: today(), nextNDays: -1 });
    setPreviousBD(defaultDate[0].next_business_day.slice(0, 10));

    return () => abortController.abort();
  }
  async function loadAccounts() {
    console.log("Loading Accounts Information!");
    const abortController = new AbortController();

    const response = await getAllAccounts(abortController.signal);
    setAccountsInfo(response);
    return () => abortController.abort();
  }

  async function loadSecurities() {
    console.log("Loaded Securities!");
    const abortController = new AbortController();

    const response = await getSecurities(abortController.signal);
    setSecurities(response);
    return () => abortController.abort();
  }
  useEffect(() => {loadDate()}, []);
  useEffect(() => {loadAccounts()}, []);
  useEffect(() => {loadSecurities()}, []);


  if (!previousBD || !accountsInfo || !securities) {
    return <h1>Loading...</h1>
  } else {
    return (
      <>
        <DesktopBar />
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<LandingPage previousBD={previousBD}/>}/>
            <Route path='/performance' element={<Dashboard previousBD={previousBD} accountsInfo={accountsInfo}/>} />
            <Route exact path='/risk/:aoDate/:positionView/:accounts/:aggregateRows/:cusip' element={<CusipRiskHoldings accountsInfo={accountsInfo} />} />
            <Route path='/risk/:aoDate/:positionView/:accounts/:aggregateRows' element={<RiskHoldings accountsInfo={accountsInfo}/>} />
            <Route path='/shareholders' element={<ShareHolders />} />
            <Route path='/trade-history' element={<TradeHistoryLandingPage previousBD={previousBD} accountsInfo={accountsInfo} securities={securities}/> } />
            <Route path='/portfolio-targets' element={<PortfolioTargetsPage />} />
            <Route path='/vconn-confirmation' element={<VConnConfirmationPage previousBD={previousBD} accountsInfo={accountsInfo} securities={securities}/>}  />
          </Routes>
        </main>

        <Footer />
      </>

    );
  }
}

export default App;
