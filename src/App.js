import Home from "./components/Home";
import Client from "./components/Client";
import Host from "./components/Host";
import Header from "./components/Header";
import {Routes, Route, Navigate} from "react-router-dom";
import Listings from "./components/Listings";
import NewListings from "./components/NewListings";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
      <>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Navigate replace to={"/home"}/>} />
          <Route path="/client" element={<Client/>}/>
          <Route path="/listings" element={<Listings/>}/>
          <Route path="/new_listings" element={<NewListings/>}/>
          <Route path="/host" element={<Host/>}/>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes></>
  );
}

export default App;