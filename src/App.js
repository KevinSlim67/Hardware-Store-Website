import './App.scss';
import HomePage from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './pages/product';
import SupportPage from './pages/support';
import ProductBuyPage from "./pages/product_buy";
import Footer from './components/footer/footer';
import NotImplemented from './components/popups/not_implemented';
import SupportTicketPage from './pages/support_ticket';

function App() {

  const width = {
    width: '100%',
    maxWidth: '1700px',
    overflow: 'hidden'
  }
  

  return (
    <Router>
      <div className="App bg-secondary selection:bg-accent-100 selection:text-primary-700">
        <div id="Layout" style={width} className="Layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route exact path="/support" element={<SupportPage />} />
            <Route exact path={`/product/:id`} element={<ProductBuyPage />} />
            <Route exact path={`/support/:id`} element={<SupportTicketPage />} />
          </Routes>
          <Footer />
          <NotImplemented />
        </div>
      </div>
    </Router>
  );
}

export default App;
