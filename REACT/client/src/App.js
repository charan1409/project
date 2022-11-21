import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./Components/ScrollTop";

import "./App.css";
import Landing from "./Components/Landing/Landing";
import Index from "./Components/Main/Index";
import ViewPlace from "./Components/viewplaces/ViewPlace";

import BeachesHotel from "./Components/PlacesHotel/BeachesHotel";
import Book from "./Components/Book/Book";
import Payment from "./Components/Pay/Payment";

import Error from "./Components/ErrorPage/Error";
import Profile from "./Components/ProfilePage/Profile";
import Tours from "./Components/MyTours/Tour";
import Transaction from "./Components/Transactions/Transaction";
import Data from "./Places_data.js"

export const store = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [trans, setTrans] = useState([]);

  const [users, setUsers] = useState([
    {
      username: "charan14",
      password: "charan",
    },
    {
      username: "rahul14",
      password: "rahulvarma",
    },
    {
      username: "kamal12",
      password: "kamalsai",
    },
    {
      username: "rohith14",
      password: "rohith",
    },
    {
      username: "nikhil14",
      password: "nikhil",
    },
  ]);

  const [loginuser, setLoginuser] = useState([]);

  return (
    <>
      <store.Provider value={{ cartItems, setCartItems, trans, setTrans, users, setUsers, loginuser, setLoginuser }}>
        <BrowserRouter>
          <ScrollTop smooth />
          <Routes>
            <Route path="/" element={<Landing users={users} />} />
            <Route path="index" element={<Index  />} />
            {Data.map((x) => (
                <Route path={x.path} element={<ViewPlace placeType={x.place} path={"/BeachesHotel"} category={"Places"} />} />
            ))}
            <Route path="BeachesHotel" element={<BeachesHotel />} />
            <Route path="book" element={<Book />} />
            <Route path="payment" element={<Payment />} />
            <Route path="profile" element={<Profile />} />
            <Route path="mytours" element={<Tours />} />
            <Route path="transactions" element={<Transaction />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </>
  );
}

export default App;