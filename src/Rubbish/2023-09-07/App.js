import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";
import Subscription from './components/subscriptions/Subscriptions';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Payment from './components/payement/Payment';
import IptvContext from './components/context/Iptv';

function App() {
  let ctx = useContext(IptvContext);
  console.log(ctx.isPaymentPage);
  return (
    // <IptvContextProvider>
    <React.Fragment>
      <BrowserRouter>
      { !ctx.isPaymentPage && <Header /> }
        {/* <Cart /> */}
        <Routes>
        {/* <Header /> */}
        {/* <Switch> */}
          <Route path="/" element={<Home />} />
          <Route path="/iptv-subscription" element={<Subscription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
        {/* </Switch> */}
        </Routes>
      { !ctx.isPaymentPage && <Footer /> }
      </BrowserRouter>
    </React.Fragment>
    // </IptvContextProvider>
  );
}

export default App;