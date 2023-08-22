import './App.css';
import { Route, Routes } from "react-router-dom";
import RiskHoldings from './components/RiskHoldings';
import DesktopBar from './layout/DesktopBar';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {




  return (
    <>
      <DesktopBar />
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<h1>DashBoard Landing Page</h1>} />
          <Route path='/risk/:aoDate/:positionView/:accounts/:aggregateRows?' element={<RiskHoldings />} />
        </Routes>
      </main>

      <Footer />
    </>

  );
}

export default App;
