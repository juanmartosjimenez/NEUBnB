import Home from "./components/Home";
import Client from "./components/Client";
import Host from "./components/Host";
import Header from "./components/Header";
import {Routes, Route } from "react-router-dom";
import Listings from "./components/Listings";
import NewListings from "./components/NewListings";
import NotFoundPage from "./components/NotFoundPage";
import ClientListings from "./components/ClientListings";
import NewReservation from "./components/NewReservation";

function App() {

  return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/client" element={<Client/>}/>
          <Route path="/listings" element={<Listings/>}/>
          <Route path="/client_listings" element={<ClientListings/>}/>
          <Route path="/new_listings" element={<NewListings/>}/>
            <Route path="/new_reservation" element={<NewReservation/>}/>
          <Route path="/host" element={<Host/>}/>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes></>
  );
}

export default App;