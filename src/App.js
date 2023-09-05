import './App.css';
import { Route, Routes } from "react-router-dom";
import RiskHoldings from './components/RiskHoldings';
import DesktopBar from './layout/DesktopBar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Dashboard from './DashBoard/Dashboard';

function App() {




  return (
    <>
      <DesktopBar />
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/risk/:aoDate/:positionView/:accounts/:aggregateRows?' element={<RiskHoldings />} />
        </Routes>
      </main>

      <Footer />
    </>

  );
}

export default App;
