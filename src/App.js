import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import DashboardPackingList from "./components/Body/DashboardPackingList";
import Home from "./components/Body/Home";
import ListBarangIn from "./components/Body/ListBarangIn";
import BarangIn from "./components/Body/BarangIn";
import ListBarangOut from "./components/Body/ListBarangOut";
import BarangOut from "./components/Body/BarangOut";
import MstStock from "./components/Body/MstStock";
import RptBarangMasuk from "./components/Body/RptBarangMasuk";
import RptBarangKeluar from "./components/Body/RptBarangKeluar";
import AdmListUser from "./components/Body/AdmListUser";
import AdmSettings from "./components/Body/AdmSettings";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route path="/Home" component={Home} />
          <Route
            path="/DashboardPackingList"
            component={DashboardPackingList}
          />
          <Route path="/ListBarangIn" component={ListBarangIn} />
          <Route path="/ListBarangOut" component={ListBarangOut} />
          <Route path="/BarangIn" component={BarangIn} />
          <Route path="/BarangOut" component={BarangOut} />
          <Route path="/MstStock" component={MstStock} />
          <Route path="/RptBarangMasuk" component={RptBarangMasuk} />
          <Route path="/RptBarangKeluar" component={RptBarangKeluar} />
          <Route path="/AdmListUser" component={AdmListUser} />
          <Route path="/AdmSettings" component={AdmSettings} />
        </Switch>
      </Router>
      <div className="content-wrap"></div>
      <Footer />
    </div>
  );
}

export default App;
